import imag1 from "@/assets/img1.jpg";

function Sidebar() {
  return (
    <div
      style={{
        background: `linear-gradient(to right, rgba(20, 14, 12, 0.123), rgba(17, 17, 17, 0.7)), 
                     url(${imag1}) `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="lg:w-1/2 order-2  flex justify-center items-center p-4 min-h-[300px]  ">
      <h1 className="text-4xl w-[300px] text-center text-white font-bold lg:text-6xl lg:w-[500px] ">
        Welcome to Our Blog Page Blogify
      </h1>
    </div>
  );
}

export default Sidebar;
