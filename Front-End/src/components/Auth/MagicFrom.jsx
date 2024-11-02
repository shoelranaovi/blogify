import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const initialdata = {
  email: "",
};
function MagicFrom() {
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

        <Button className="py-6"> Submit </Button>
        <div>
          <span> Already a member?</span> <Link>Sign in</Link>
        </div>
      </from>
    </div>
  );
}

export default MagicFrom;
