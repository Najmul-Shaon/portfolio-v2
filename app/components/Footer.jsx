import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="email icon"
            className="w-6"
          />
          najmul.nh.shaon@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>{`© ${new Date().getFullYear()} Najmul Shaon. All rights reserved.`}</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              className="text-2xl w-3.5"
              target="_blank"
              href="https://github.com/Najmul-Shaon"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              className="text-2xl w-3.5"
              target="_blank"
              href="https://www.linkedin.com/in/najmul-shaon"
            >
              <FaLinkedin />
            </a>
          </li>

          <li>
            <a
              className="text-2xl w-3.5"
              href="mailto:najmul.nh.shaon@gmail.com"
            >
              <FaRegEnvelope />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
