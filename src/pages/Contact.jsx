import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-semibold text-cyan-600 mt-32"> CONTACT ME </h1>
      <p className="text-center font-serif text-xl font-extralight leading-10 mt-12">You can Find me here !</p>

      <div className="flex mt-5 gap-4">
        <a className="bg-cyan-600  rounded-full p-3 text-3xl" href="https://github.com/smritiPandey87">
          <FaGithub />
        </a>

        <a className="bg-cyan-600  rounded-full p-3 text-3xl" href="https://www.linkedin.com/in/smriti-pandey-567910270/">
          <FaLinkedinIn />
        </a>

        <a className="bg-cyan-600  rounded-full p-3 text-3xl" href="https://mail.google.com/mail/?view=cm&fs=1&to=smritipandey86346@gmail.com">
          <MdOutlineMailOutline />
        </a>
      </div>
    </div>
  );
}
