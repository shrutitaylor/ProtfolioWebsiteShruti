import React  from "react";

const Navbar = ({scrolled}) => { 
    return (
        <nav className={`font-abril sticky mb-0 top-0 z-50 ${scrolled ? 'bg-opacity-50' : 'bg-transparent'}`}>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a  class="flex items-center space-x-3 rtl:space-x-reverse">
               
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">shruti</span>
            </a>
            
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
                <li>
                <a href="#about" class="block py-2 px-3 text-white md:text-yellow md:p-0" aria-current="page">about . </a>
                </li>
                <li>
                <a href="#work" class="block py-2 px-3 text-white rounded hover:text-yellow md:p-0">work . </a>
                </li>
                <li>
                <a href="#contact" class="block py-2 px-3 text-white rounded hover:text-yellow md:p-0 ">contact</a>
                </li>
               
            </ul>
            </div>
        </div>
        <div class=" bg-primaryFont rounded-full h-[1px] mb-4 mx-5">
        <div class="bg-yellow h-[1px] rounded-full w-[45%]" ></div>
        </div>
        </nav>

    );
}

export default Navbar;