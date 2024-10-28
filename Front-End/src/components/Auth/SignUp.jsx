import { useEffect, useState } from "react";

import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { register } from "@/Redux/AuthSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const intialstate = {
  username: "",
  email: "",
  password: "",
};

function SignUp() {
  const [fromdata, setFromdata] = useState(intialstate);
  const [showpass, setShoepass] = useState(false);
  const [btndisable, setDisable] = useState(true);
  const { email, password, username } = fromdata;

  const dispatch = useDispatch();
  const navigate = useNavigate("");
  const { isLoading } = useSelector((state) => state.auth);

  console.log(isLoading);

  useEffect(() => {
    // If both email and password are filled, enable button, else disable it
    if (email !== "" && password !== "" && username !== "") {
      setDisable(false); // Enable button
    } else {
      setDisable(true); // Disable button
    }
  }, [fromdata]);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatch(register(fromdata)).then((data) => {
        if (data.payload?.success) {
          toast.success("user create successfully");
          navigate("/auth/login");
          setFromdata(intialstate);
        } else {
          console.log(data);

          toast.error(data.payload?.message);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" text-white">
      <h1 className="text-3xl font-bold font-mono mb-4 lg:text-4xl">
        Welcome To Our Page{" "}
      </h1>
      <p> The fristest way to fill up and login</p>
      <div className="pt-4 flex flex-col ">
        <from onSubmit={handleSubmit} className="flex flex-col gap-3 ">
          <div className="w-[300px] flex flex-col gap-2 ">
            <Label>UserName:</Label>
            <Input
              id="username"
              value={fromdata.username}
              onChange={(e) => {
                setFromdata({ ...fromdata, [e.target.id]: e.target.value });
              }}
              className="w-full"
              placeholder="username"
              type="text"
            />
          </div>
          <div className="w-[300px] flex flex-col gap-2 ">
            <Label>Email:</Label>
            <Input
              id="email"
              value={fromdata.email}
              onChange={(e) => {
                setFromdata({ ...fromdata, [e.target.id]: e.target.value });
              }}
              className="w-full"
              placeholder="yourmail@gmail.com"
              type="text"
            />
          </div>
          <div className="w-[300px] flex flex-col gap-2 ">
            <Label>Password:</Label>
            <div className="relative">
              <Input
                id="password"
                value={fromdata.password}
                onChange={(e) => {
                  setFromdata({ ...fromdata, [e.target.id]: e.target.value });
                }}
                className="w-full"
                placeholder="Type your Password"
                type={showpass ? "text" : "password"}
              />
              <div
                className="absolute top-2 right-2"
                onClick={() => setShoepass(!showpass)}>
                {showpass ? <Eye /> : <EyeOff />}
              </div>
            </div>
          </div>
          <Button
            onClick={handleSubmit}
            disabled={btndisable}
            className="w-full">
            {isLoading ? (
              <div className="flex gap-2">
                {" "}
                <Loader2 className="animate-spin" /> <span> Please wait</span>{" "}
              </div>
            ) : (
              <span>Register</span>
            )}
          </Button>
        </from>
      </div>
    </div>
  );
}

export default SignUp;
