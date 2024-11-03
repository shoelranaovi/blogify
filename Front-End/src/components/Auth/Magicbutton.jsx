import { useState } from "react";
import { Button } from "../ui/button";
import MagicFrom from "./signupMagicFrom";
import LogInWithPassword from "./LogInWithPassword";

function Magicbutton() {
  const [tab, setTab] = useState("magic");
  return (
    <div className="w-full mb-10 ">
      <div className="w-full p-4  flex flex-col lg:flex-row border-gray-100 border-2 ">
        <Button
          variant="outline"
          onClick={() => setTab("magic")}
          className={
            tab === "magic"
              ? "w-full gap-2 font-thin p-6 py-7 text-xl text-blue-400 bg-indigo-50"
              : "w-full gap-2 font-thin p-6 py-7 text-xl hover:text-blue-400 hover:bg-blue-100"
          }>
          {" "}
          <span>Magic Link</span>
        </Button>
        <Button
          variant="outline"
          onClick={() => setTab("password")}
          className={
            tab === "password"
              ? "w-full gap-2 font-thin p-6 py-7 text-xl text-blue-400 bg-indigo-50"
              : "w-full gap-2 font-thin p-6 py-7 text-xl hover:text-blue-400 hover:bg-blue-100"
          }>
          {" "}
          <span>Password</span>
        </Button>
      </div>
      <div className="w-full ">
        {tab === "magic" && <MagicFrom />}
        {tab === "password" && <LogInWithPassword />}
      </div>
    </div>
  );
}

export default Magicbutton;
