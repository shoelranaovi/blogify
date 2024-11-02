import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const initialdata = {
  username: "",
  email: "",
  password: "",
};
function LogInWithPassword() {
  const [fromdata, setFromdata] = useState(initialdata);
  console.log(fromdata);

  return (
    <div className="mt-10">
      <from className="flex flex-col gap-3">
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
        <Button className="py-6"> Submit </Button>
        <div>
          <span> Already a member?</span> <Link>Sign in</Link>
        </div>
      </from>
    </div>
  );
}

export default LogInWithPassword;
