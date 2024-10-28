import { useState } from "react";
import Navlist from "./Navlist";

function Navbar() {
  const [sideopen, setSideopen] = useState(false);

  function handleopen() {
    setSideopen(!sideopen);
  }
  return (
    <nav className=" flex  relative justify-between w-full h-16 bg-slate-200 px-8 py-2  items-center">
      <div>Logo</div>
      <div className="hidden lg:flex ">
        {/* desktop view */}
        <Navlist />
      </div>
      <div onClick={handleopen}>Right side</div>
      <div
        className={`absolute lg:hidden w-full transition-all ease-out duration-500 bg-slate-200 top-16 right-0 h-[90vh] ${
          sideopen ? "left-[00%]" : "-left-[100%] "
        } `}>
        {/* mobile view */}
        <Navlist />
      </div>
    </nav>
  );
}

export default Navbar;
