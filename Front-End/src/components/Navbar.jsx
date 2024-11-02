import { useState } from "react";
import Navlist from "./Navlist";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from "@/assets/logo.PNG";

function Navbar() {
  const [sideopen, setSideopen] = useState(false);

  function handleopen() {
    setSideopen(!sideopen);
  }
  return (
    <nav className=" flex sticky z-10 justify-between  bg-white top-0   w-full h-16 px-4 lg:px-10  mx-auto my-1 items-center  ">
      <div className="">
        <img className="w-40" src={logo} alt="" />
      </div>
      <div className="hidden lg:flex ">
        {/* desktop view */}
        <Navlist />
      </div>
      <div
        className="flex lg:hidden cursor-pointer text-3xl font-bold  "
        onClick={handleopen}>
        {sideopen ? (
          <IoMdClose className="transition ease-out duration-500" />
        ) : (
          <GiHamburgerMenu className="transition ease-out duration-500" />
        )}
      </div>
      <div
        className={`absolute  lg:hidden bg-white w-full transition-all ease-in-out duration-500 z-10  overflow-y-auto top-16 right-0 h-[70vh] ${
          sideopen ? "left-[00%]" : "-left-[100%] "
        } `}>
        {/* mobile view */}
        <Navlist />
      </div>
    </nav>
  );
}

export default Navbar;
