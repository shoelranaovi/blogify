import { useState } from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { register } from "@/Redux/AuthSlice";

const initialdata = {
  username: "",
  email: "",
  password: "",
};
function LogInWithPassword() {
  const [fromdata, setFromdata] = useState(initialdata);
  console.log(fromdata);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handlesubmit(e) {
    e.preventDefault();
    alert("clicked");
    try {
      dispatch(register(fromdata)).then((data) => {
        if (data.payload.success) {
          toast.success(data.payload.message);
          console.log(data.payload);
          navigate("/auth/login");
        } else {
          toast.error(data.payload.message);
          console.log(data);
        }
      });
    } catch (error) {
      console.log(error);
      toast.error(error.massage);
    }
  }

  return (
    <div className="mt-10">
      <from onSubmit={handlesubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <label>Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Your UserName"
            className="bg-gray-200 rounded-sm p-3 border-2"
            value={fromdata.username}
            onChange={(e) =>
              setFromdata({ ...fromdata, username: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-3">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="bg-gray-200 rounded-sm p-3 border-2"
            value={fromdata.email}
            onChange={(e) =>
              setFromdata({ ...fromdata, email: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-3">
          <label>Password:</label>
          <input
            type="Password"
            id="password"
            placeholder="Enter Your Password"
            className="bg-gray-200 rounded-sm p-3 border-2"
            value={fromdata.password}
            onChange={(e) =>
              setFromdata({ ...fromdata, password: e.target.value })
            }
          />
        </div>
        <Button onClick={handlesubmit} className="py-6">
          {" "}
          Sign Up{" "}
        </Button>
        <div>
          <span> Already a member?</span> <Link>Sign in</Link>
        </div>
      </from>
    </div>
  );
}

export default LogInWithPassword;
