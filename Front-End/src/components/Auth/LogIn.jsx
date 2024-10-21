import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Eye, EyeOff } from "lucide-react";
const intialstate = {
  email: "",
  password: "",
};

function Login() {
  const [fromdata, setFromdata] = useState(intialstate);
  const [showpass, setShoepass] = useState(false);
  console.log(fromdata);

  return (
    <div className=" text-white">
      <h1 className="text-3xl font-bold font-mono mb-4 lg:text-4xl">
        Welcome Back{" "}
      </h1>
      <p> The fristest way to fill up and login</p>
      <div className="pt-4 flex flex-col ">
        <from className="flex flex-col gap-3 ">
          <div className="w-[300px] flex flex-col gap-2 ">
            <Label>Email:</Label>
            <Input
              id="email"
              value={fromdata.email}
              onChange={(e) => {
                setFromdata({ [e.target.id]: e.target.value });
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
                  setFromdata({ [e.target.id]: e.target.value });
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
        </from>
      </div>
    </div>
  );
}

export default Login;
