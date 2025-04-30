import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* section title  */}
      <h4 className="text-center mb-2 text-lg font-ovo">What i offers</h4>
      <h2 className="text-center text-5xl font-ovo">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>

      {/* section content  */}
      <div className="grid grid-cols-[var(--grid-auto)] gap-6 my-10">
        {serviceData.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={item?.icon} alt="icon" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {item?.title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {item?.description}
            </p>
            <a
              href={item?.link}
              className="flex items-center gap-2 text-sm mt-5"
            >
              Ream More{" "}
              <Image
                src={assets.right_arrow}
                alt="arrow icon"
                className="w-4"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
