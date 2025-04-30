import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRef } from "react";

const Navbar = () => {
  const sideMenuRef = useRef();
  // func for open menu
  const openMunu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  // func for close menu
  const closeMunu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  return (
    <>
      {/* bg image that applied to all over the container  */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="header bg"
          className="w-full"
        />
      </div>
      {/* whole nav  */}
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        {/* first container::: logo section  */}
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* second container::: menu section::: for large device  */}
        <ul className="hidden lg:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a className="font-ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>

        {/* third container::: action section  */}
        <div className="flex items-center gap-4">
          <button>
            <Image
              src={assets.moon_icon}
              alt="moon icon"
              className="w-6 cursor-pointer"
            />
          </button>
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo"
            href="#contact"
          >
            Contact{" "}
            <Image src={assets.arrow_icon} className="w-3" alt="contact icon" />
          </a>
          <button className="block lg:hidden ml-3" onClick={openMunu}>
            <Image
              src={assets.menu_black}
              alt="menu icon"
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* mobile and tab menu  */}
        <ul
          ref={sideMenuRef}
          className="flex lg:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMunu}>
            <Image
              src={assets.close_black}
              alt="close icon"
              className="w-5 cursor-pointer"
            ></Image>
          </div>{" "}
          <li>
            <a className="font-ovo" onClick={closeMunu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMunu} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMunu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMunu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMunu} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
