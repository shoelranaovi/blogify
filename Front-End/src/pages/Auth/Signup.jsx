import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Magicbutton from "@/components/Auth/Magicbutton";

function Signup() {
  return (
    <div className="w-full l flex justify-center  ">
      <div className="bg-white w-full  my-16 lg:my-10 mx-4 p-4 lg:w-[500px] flex rounded-lg gap-4 flex-col justify-center items-center">
        <div className="mt-10 flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold text-gray-900">Sign up</h1>
          <p>Create Your account</p>
        </div>
        <div className="w-full p-4 flex flex-col gap-6">
          <Button
            variant="outline"
            className="w-full gap-2 font-thin p-6 text-xl">
            {" "}
            <FcGoogle size={30} /> <span>Sign up with Google</span>
          </Button>
          <Button
            variant="outline"
            className="w-full gap-2 font-thin p-6 text-xl">
            {" "}
            <FaGithub size={30} /> <span>Sign up with Github</span>
          </Button>
        </div>

        <div className="w-full relative ">
          <span className="w-full h-0.5 bg-black flex"></span>
          <div className="  flex w-full items-center justify-center relative -top-4 ">
            <span className="bg-white"> Or sign up with email</span>
          </div>
        </div>
        <div className="w-full">
          <Magicbutton />
        </div>
      </div>
    </div>
  );
}

export default Signup;
