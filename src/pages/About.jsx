import React from "react";

export default function About() {
  return (
    <div  id="about" className="mt-10  flex flex-col justify-center items-center">
      <h1 className="lg:text-4xl font-semibold font-poppins text-cyan-600  text-2xl mb-5">ABOUT ME</h1>
      <p className="text-center  lg:text-xl font-extralight leading-10 text-lg ">
        Hi, I'm Smriti Pandey — a frontend developer
        <br />
        who loves turning ideas into clean, interactive web experiences.
        <br /> I'm currently pursuing a degree in Computer Science
        <br />
        and always looking for new challenges to grow and create meaningful
        projects.
      </p>
      <h2 className="lg:text-3xl text-md font-semibold text-cyan-600 mt-5 mb-5">
        My current stack of languages/technologies are:
      </h2>
      <p className="text-center font-serif lg:text-xl text-lg font-extralight">
        HTML5 - CSS3 - JAVASCRIPT - REACTJS - REDUXTOOLKIT-TAILWINDCSS
      </p>
      <a
        className="mt-12 text-xl bg-cyan-600 px-5 py-2 rounded-full hover:bg-cyan-700 font-extralight"
        href="Smriti_Pandey_Resume.pdf"
      >
        RESUME
      </a>
    </div>
  );
}
