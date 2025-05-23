import React from "react";

export default function Button({ live, git }) {
  return (
    <div className="lg:ml-10 lg:mr-10  ml-20 flex gap-10 text-2xl mt-5 ">
      <a  className=" bg-cyan-600 font-extralight px-5 py-3 rounded-full " href={live}>Live</a>
      <a className="border border-cyan-600 font-extralight px-5 py-3 rounded-full" href={git}>Source</a>
    </div>
  );
}
