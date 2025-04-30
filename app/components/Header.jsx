import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = ({ isDarkMode }) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* user profile image  */}
      <div>
        <Image
          src={assets.profile_img}
          alt="profile image"
          className="rounded-full w-32"
        />
      </div>{" "}
      {/* header contents  */}
      <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I'm Najmul Hasan{" "}
        <Image src={assets.hand_icon} alt="profile image" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Frontend web devloper based in Bangladesh.
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
      {/* action btns area  */}
      <div className="flex items-center flex-col sm:flex-row gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="profile image"
            className="w-4"
          />
        </a>
        <a
          href="/Resume-of-Najmul-Hasan.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black dark:bg-white"
        >
          Resume{" "}
          <Image
            src={assets.download_icon}
            alt="profile image"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
