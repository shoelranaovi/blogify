import { Button } from "@/components/ui/button";
import { magiclogin } from "@/Redux/AuthSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { toast } from "sonner";

const initialdata = {
  email: "",
};

function LoginLink() {
  const [fromdata, setFromdata] = useState(initialdata);
  console.log(fromdata);
  const dispatch = useDispatch();
  async function handlesubmit(e) {
    e.preventDefault();
    alert("clicked");
    try {
      dispatch(magiclogin(fromdata)).then((data) => {
        if (data.payload.success) {
          toast.success(data.payload.message);
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

        <Button onClick={handlesubmit} className="py-6">
          {" "}
          Submit{" "}
        </Button>
        <div>
          <span> Already an member?</span>{" "}
          <Link to={"/auth/register"}>Sign up</Link>
        </div>
      </from>
    </div>
  );
}

export default LoginLink;
