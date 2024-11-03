import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";

const navlist = [
  {
    name: "Home",
    link: "/",
    sublink: [
      { name: "Business Blog", id: "business-blog", link: "/" },
      { name: "Parsonal Blog", id: "personal-blog", link: "/parsonal-blog" },
    ],
  },
  {
    name: "Pages",
    link: "",
    sublink: [
      { name: "About Us", id: "about-Us", link: "/about-Us" },
      { name: "Author Page", id: "author-Page", link: "/author-Page" },
      {
        name: "Style Guide Page",
        id: "style-guide-page",
        link: "/style-guide-page",
      },
    ],
  },
  { name: "Blogs", link: "/contact" },
  { name: "Dogs", link: "/contact" },
  { name: "Support", link: "/contact" },
];
const initialState = {
  Home: false,
  Pages: false,
};

function Navlist() {
  const [open, setopen] = useState(initialState);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [proopen, setproOpen] = useState(false);

  const location = useLocation();

  function toggle(menu) {
    setopen(initialState);
    if (open[menu]) {
      setopen(initialState);
    } else {
      setopen((prev) => ({ ...prev, [menu]: !prev[menu] }));
    }
  }
  return (
    <div className="flex flex-col   lg:flex-row p-4 lg:gap-20 mt-1 font-semibold ">
      <div className="flex  flex-col lg:flex-row lg:gap-8">
        {" "}
        {navlist.map((item, index) => {
          return (
            <div
              className="flex relative flex-col cursor-pointer   transition ease-out duration-1000"
              key={index}>
              <div
                className="flex mb-2"
                onClick={item.sublink ? () => toggle(item.name) : undefined}>
                <div className="text-gray-500 transition ease-out duration-300  hover:text-gray-950">
                  {item.name}
                </div>
                <span className="text-gray-500    transition ease-out duration-300  hover:text-gray-950">
                  {item.sublink && item.sublink.length > 0 && <ChevronDown />}
                </span>
              </div>
              <div
                className={`flex flex-col   transition-all duration-500 ease-in-out bg-white lg:w-[220px] lg:absolute rounded-sm shadow-xl top-9 -left-4 p-3 ${
                  open[item.name]
                    ? "max-h-40 opacity-100 scale-100 mb-5"
                    : "max-h-0 opacity-0 scale-95"
                }`}>
                {/* sublink */}
                <div className="w-4 h-4 bg-white  left-5 absolute -top-1 lg:-top-1 rotate-45"></div>
                {item.sublink &&
                  item.sublink.length > 0 &&
                  item.sublink.map((subitem, index) => (
                    <div className=" w-full mt-2 " key={index}>
                      <Link
                        className={
                          location.pathname === subitem.link
                            ? " w-full flex font-normal justify-start p-2 rounded-lg text-left  bg-gray-50 text-blue-400"
                            : " w-full flex font-normal justify-start p-2 rounded-lg text-left text-gray-700 hover:bg-gray-50 hover:text-blue-400"
                        }
                        to={subitem.link}>
                        <span>{subitem.name}</span>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          );
        })}{" "}
      </div>
      <div className="flex gap-2 flex-col lg:flex-row">
        <div className="Lg:ml-5 flex flex-col lg:flex gap-2 lg:flex-row">
          <div className=" w-8 h-8 text-black flex bg-gray-100 justify-center transition ease-out duration-300 cursor-pointer items-center hover:bg-gray-300 rounded-full">
            <FaFacebookF />
          </div>
          <div className=" w-8 h-8 text-black flex bg-gray-100 justify-center transition ease-out duration-300 cursor-pointer items-center hover:bg-gray-300 rounded-full">
            <FaInstagram />
          </div>
          <div className=" w-8 h-8 text-black flex bg-gray-100 justify-center transition ease-out duration-300 cursor-pointer items-center hover:bg-gray-300 rounded-full">
            <FaLinkedinIn />
          </div>
          <div className=" w-8 h-8 text-black flex bg-gray-100 justify-center transition ease-out duration-300 cursor-pointer items-center hover:bg-gray-300 rounded-full">
            <FaXTwitter />
          </div>
        </div>
        <div className="flex flex-row gap-4  mt-5 lg:mt-0  lg:justify-center lg:items-center">
          <div>
            <CiSearch size={30} />
          </div>
          {user ? (
            <div
              onClick={() => setproOpen(!proopen)}
              className="w-10 h-10 relative rounded-full  bg-black">
              <img src={user.profilePicture} alt="" />
              {proopen && (
                <div className="w-[200px] p-5 flex justify-center gap-4 items-center flex-col bg-gray-100 absolute top-12   lg:right-3 lg:top-12  ">
                  <Link
                    className="w-full rounded-sm py-2 px-1 bg-slate-50 hover:bg-blue-100 transition ease-in-out duration-300 hover:text-blue-400 "
                    to="/profile">
                    Profile
                  </Link>
                  <Link
                    className="w-full rounded-sm py-2 px-1 bg-slate-50 hover:bg-blue-100 transition ease-in-out duration-300 hover:text-blue-400 "
                    to="/profile">
                    DashBord
                  </Link>
                  <span className="w-4 h-4 bg-gray-100 absolute -top-1 left-4 lg:left-44 rotate-45 white"></span>
                </div>
              )}
            </div>
          ) : (
            <Button onClick={() => navigate("/auth/login")}>Sign In</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navlist;
