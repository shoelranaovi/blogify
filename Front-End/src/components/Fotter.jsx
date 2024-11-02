import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const list = [
  {
    id: 1,
    name: " Privacy",
    link: "/",
  },
  {
    id: 2,
    name: " Contact",
    link: "/",
  },
  {
    id: 3,
    name: " Contribute",
    link: "/",
  },
];

function Fotter() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-around bg-white rounded-lg items-center p-8 gap-4">
      <div>
        <span>© 2024 NextBlog. All rights reserved</span>
      </div>
      <div>
        <div className="flex justify-center items-center gap-2">
          {list.map((item) => (
            <div
              className="flex justify-center    gap-2 items-center"
              key={item.id}>
              <Link className="relative border-b-2 border-transparent transition-all duration-500 hover:border-black">
                {item.name}
              </Link>
              <span
                className={
                  list.length === item.id
                    ? "hidden"
                    : `w-1 flex h-1 rounded-full bg-black `
                }></span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <span>Follow Us :</span>

        <div className=" flex gap-3">
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
      </div>
    </div>
  );
}

export default Fotter;
