import React from "react";

export default function Button({ live, git }) {
  return (
    <div className="ml-10 mr-10 mt-10  flex gap-10 text-2xl">
      <a  className=" bg-cyan-600 font-extralight px-5 py-3 rounded-full " href={live}>Live</a>
      <a className="border border-cyan-600 font-extralight px-5 py-3 rounded-full" href={git}>Source</a>
    </div>
  );
}
