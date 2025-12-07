import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#FFCC66]">
      <div className="mycontainer flex  items-center justify-between py-4 px-5 h-14">
        <div
          className="logo font-bold text-2xl pl-20 
        text-[#3E8E7E]
"
        >
          &lt;Vaulty/&gt;
        </div>
        <ul className="flex pr-20 gap-15 font-bold">
          <li className="text-[#3E8E7E]">
            <a href="/">Home</a>
          </li>
          <li className="text-[#3E8E7E]">
            <a href="/">Contact</a>
          </li>
          <li className="text-[#3E8E7E]">
            <a href="/">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
