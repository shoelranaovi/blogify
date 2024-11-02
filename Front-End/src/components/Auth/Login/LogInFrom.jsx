import { Button } from "@/components/ui/button";
import { useState } from "react";

import { Link } from "react-router-dom";

const initialdata = {
  email: "",
  password: "",
};
function LogInFrom() {
  const [fromdata, setFromdata] = useState(initialdata);
  console.log(fromdata);

  return (
    <div className="mt-10">
      <from className="flex flex-col gap-3">
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
          <span> Dont have account ?</span> <Link> Sign up</Link>
        </div>
      </from>
    </div>
  );
}

export default LogInFrom;
