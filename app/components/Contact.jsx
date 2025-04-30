import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
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
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      {/* section title  */}
      <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>
      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-[var(--grid-auto)] gap-6 mt-10 mb-8">
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="text"
            placeholder="Enter Your Name"
            required
            name="name"
          />
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="email"
            placeholder="Enter Your Email"
            required
            name="email"
          />
        </div>
        <textarea
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          name="message"
          rows={6}
          placeholder="Enter Your Message"
          required
          id=""
        ></textarea>
        <button
          className="px-8 py-3 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer"
          type="submit"
        >
          Submit Now{" "}
          <Image
            src={assets.right_arrow_white}
            alt="arrow icon"
            className="w-4"
          />
        </button>
      </form>
    </div>
  );
};

export default Contact;
