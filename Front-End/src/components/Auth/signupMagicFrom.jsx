import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { signupwithlink } from "@/Redux/AuthSlice";

const initialdata = {
  email: "",
};
function MagicFrom() {
  const [fromdata, setFromdata] = useState(initialdata);

  const dispatch = useDispatch();
  async function handlesubmit(e) {
    e.preventDefault();
    alert("clicked");
    try {
      dispatch(signupwithlink(fromdata)).then((data) => {
        if (data.payload.success) {
          toast.success(data.payload.message);
          console.log(data);
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
          <span> Already a member?</span> <Link>Sign in</Link>
        </div>
      </from>
    </div>
  );
}

export default MagicFrom;