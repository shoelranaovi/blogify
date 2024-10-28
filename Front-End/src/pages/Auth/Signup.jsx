import logo from "../../assets/Logo.PNG";

import SignUp from "@/components/Auth/SignUp";

function Signup() {
  return (
    <div className="lg:w-1/2 flex flex-col  gap-4  p-2 bg-zinc-800">
      <div>
        {" "}
        <img className="w-32 lg:w-40" src={logo} alt="" />
      </div>
      <div className="w-full h-full flex  justify-center items-center">
        <SignUp />{" "}
      </div>
    </div>
  );
}

export default Signup;
