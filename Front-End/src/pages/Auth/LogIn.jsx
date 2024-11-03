import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Magicbuttonlogin from "@/components/Auth/Login/Magicforlogin";
import { useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";

import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { checkUser, google } from "@/Redux/AuthSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const googlelogin = (token) => {
    const data = jwtDecode(token);
    const userData = {
      username: data.name,
      email: data.email,
      profilePicture: data.picture,
    };
    dispatch(google(userData)).then((data) => {
      console.log(data);
      if (data.payload.success) {
        dispatch(checkUser());
        navigate("/");
      }
    });
  };
  const googlelogin2 = async (token) => {
    const data = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );
    console.log(data);

    const userData = {
      username: data.data.family_name,
      email: data.data.email,
      profilePicture: data.data.picture,
    };
    console.log(userData);

    dispatch(google(userData)).then((data) => {
      console.log(data);
      if (data.payload.success) {
        dispatch(checkUser());
        navigate("/");
      }
    });
  };

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      googlelogin(credentialResponse.credential);
      console.log(credentialResponse);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });
  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      googlelogin2(credentialResponse.access_token);
      // googlelogin(credentialResponse.credential);
      console.log(credentialResponse);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });
  return (
    <div className="w-full l flex justify-center  ">
      <div className="bg-white w-full  my-16 lg:my-10 mx-4 p-4 lg:w-[500px] flex rounded-lg gap-4 flex-col justify-center items-center">
        <div className="mt-10 flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold text-gray-900">Sign In</h1>
          <p>Log in here</p>
        </div>
        <div className="w-full p-4 flex flex-col gap-6">
          <Button
            variant="outline"
            onClick={login}
            className="w-full gap-2 font-thin p-6 text-xl">
            {" "}
            <FcGoogle size={30} /> <span>Sign up with google</span>
          </Button>
          <Button
            variant="outline"
            onClick={login}
            className="w-full gap-2 font-thin p-6 text-xl">
            {" "}
            <FaGithub size={30} /> <span>Sign up with Github</span>
          </Button>
        </div>

        <div className="w-full relative ">
          <span className="w-full h-0.5 bg-black flex"></span>
          <div className="  flex w-full items-center justify-center relative -top-4 ">
            <span className="bg-white"> Or sign In with email</span>
          </div>
        </div>
        <div className="w-full">
          <Magicbuttonlogin />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
