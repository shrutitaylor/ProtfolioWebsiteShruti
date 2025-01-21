import React, { useState } from "react";

const Navbar = ({ scrolled }) => {
  const [activeSection, setActiveSection] = useState(""); // State to track the active section

  return (
    <nav className={`font-abril sticky mb-0 top-0 z-50 ${scrolled ? "bg-opacity-50" : "bg-transparent"}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">shruti</span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <a
                href="#about"
                className={`block py-2 px-3 md:p-0 ${
                  activeSection === "about" ? "text-yellow line-through" : "text-white no-underline"
                } hover:text-yellow`}
                onClick={() => setActiveSection("about")}
              >
                about .
              </a>
            </li>
            <li>
              <a
                href="#work"
                className={`block py-2 px-3 md:p-0 ${
                  activeSection === "work" ? "text-yellow line-through" : "text-white no-underline"
                } hover:text-yellow`}
                onClick={() => setActiveSection("work")}
              >
                work .
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`block py-2 px-3 md:p-0 ${
                  activeSection === "contact" ? "text-yellow line-through" : "text-white no-underline"
                } hover:text-yellow`}
                onClick={() => setActiveSection("contact")}
              >
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-primaryFont rounded-full h-[1px] mb-4 mx-5">
        <div className={`bg-yellow h-[1px] rounded-full w-[5%] ${
                  activeSection === "work" ? "w-[60%]" : 
                  activeSection === "about" ? "w-[30%]" : "w-[100%]"
                } `}></div>
      </div>
    </nav>
  );
};

export default Navbar;
