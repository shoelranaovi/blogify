import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navlist = [
  {
    name: "Home",
    link: "/",
    sublink: [
      { name: "sub1", link: "/" },
      { name: "sub1", link: "/" },
    ],
  },
  {
    name: "About",
    link: "/about",
    sublink: [
      { name: "sub1", link: "/" },
      { name: "sub1", link: "/" },
    ],
  },
  { name: "Contact", link: "/contact" },
];

function Navlist() {
  const [open, setopen] = useState({
    Home: false,
    About: false,
  });
  console.log(open);

  function toggle(menu) {
    setopen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  }
  return (
    <div className="flex flex-col lg:flex-row p-4 gap-4 lg:gap-8 mt-1 font-semibold ">
      {navlist.map((item, index) => {
        return (
          <Link
            className="flex relative flex-col  transition ease-out duration-1000"
            key={index}
            href={item.link}>
            <div className="flex">
              <div
                onClick={item.sublink ? () => toggle(item.name) : undefined}
                className="text-gray-500 transition ease-out duration-300  hover:text-gray-950">
                {item.name}
              </div>
              <span>
                {item.sublink && item.sublink.length > 0 && <ArrowDown />}
              </span>
            </div>
            <div
              className={`flex flex-col gap-2 transition-all duration-500 ease-in-out bg-white w-[200px] lg:absolute rounded-sm shadow-xl top-9 -left-4 p-2 ${
                open[item.name]
                  ? "max-h-40 opacity-100 scale-100"
                  : "max-h-0 opacity-0 scale-95"
              }`}>
              {/* sublink */}
              <div className="w-4 h-4 bg-white  left-5 absolute -top-1 lg:-top-1 rotate-45"></div>
              {item.sublink &&
                item.sublink.length > 0 &&
                item.sublink.map((subitem, index) => (
                  <div key={index}>
                    <Link>{subitem.name}</Link>
                  </div>
                ))}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Navlist;
