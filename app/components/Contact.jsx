import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "motion/react";
import { IoCallOutline, IoLocationSharp } from "react-icons/io5";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      Swal.fire({
        title: "Sent!",
        text: "Message sent Successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      setResult(data.message);
      Swal.fire({
        title: "Opps!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      {/* section title  */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo mb-12"
      >
        Get in touch
      </motion.h2>
      {/* <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </motion.p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start md:items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl font-medium font-ovo"
          >
            Let's Talk
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="max-w-2xl mt-5 mb-12 font-ovo"
          >
            I'd love to hear from you! If you have any questions, comments or
            feedback, please use the form below.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="w-max flex items-center gap-2"
          >
            {/* <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt="email icon"
              className="w-6"
            /> */}
            <IoCallOutline
              className={`text-2xl ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
            />
            +88 01721 933810
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="w-max flex items-center gap-2"
          >
            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt="email icon"
              className="w-6"
            />
            najmul.nh.shaon@gmail.com
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="w-max flex items-center justify-start gap-2"
          >
            {/* <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt="email icon"
              className="w-6"
            /> */}
            <IoLocationSharp
              className={`text-2xl ${
                isDarkMode ? "text-white" : "text-gray-500"
              }`}
            />
            Mohammadpur, Dhaka, Bangladesh
          </motion.div>
        </div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className=""
          onSubmit={onSubmit}
        >
          <div className="grid grid-cols-[var(--grid-auto)] gap-6 mt-10 mb-8">
            <motion.input
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              type="text"
              placeholder="Enter Your Name"
              required
              name="name"
            />
            <motion.input
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              type="email"
              placeholder="Enter Your Email"
              required
              name="email"
            />
          </div>
          <motion.textarea
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
            name="message"
            rows={6}
            placeholder="Enter Your Message"
            required
            id=""
          ></motion.textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="px-8 py-3 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
            type="submit"
          >
            Send Message{" "}
            <Image
              src={assets.right_arrow_white}
              alt="arrow icon"
              className="w-4"
            />
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
