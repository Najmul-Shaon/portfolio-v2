import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef(null);
  // func for open menu
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  // func for close menu
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* bg image that applied to all over the container  */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="header bg"
          className="w-full"
        />
      </div>
      {/* whole nav  */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        {/* first container::: logo section  */}
        <a
          href="#top"
          // {/* <Image
          //   src={isDarkMode ? assets.logo_dark : assets.logo}
          //   alt="logo"
          //   className="w-28 cursor-pointer mr-14"
          // /> */}
          className="text-3xl font-bold tracking-wide cursor-pointer"
        >
          {"<>Najmul</>"}
        </a>

        {/* second container::: menu section::: for large device  */}
        <ul
          className={`hidden lg:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "shadow-sm bg-white/50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
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
              onClick={() => setIsDarkMode((prev) => !prev)}
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="moon icon"
              className="w-6 cursor-pointer"
            />
          </button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50"
            href="#contact"
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="contact icon"
            />
          </motion.a>
          <button className="block lg:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu icon"
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* mobile and tab menu  */}
        <ul
          ref={sideMenuRef}
          className="flex lg:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close icon"
              className="w-5 cursor-pointer"
            ></Image>
          </div>{" "}
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
