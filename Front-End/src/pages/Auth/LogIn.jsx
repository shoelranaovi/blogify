import Login from "@/components/Auth/LogIn";
import logo from "../../assets/Logo.PNG";

function LogIn() {
  return (
    <div className="lg:w-1/2 flex flex-col  gap-4  p-2 bg-zinc-800">
      <div>
        {" "}
        <img className="w-32 lg:w-40" src={logo} alt="" />
      </div>
      <div className="w-full h-full flex  justify-center items-center">
        <Login />{" "}
      </div>
      <div>Fotter</div>
    </div>
  );
}

export default LogIn;
