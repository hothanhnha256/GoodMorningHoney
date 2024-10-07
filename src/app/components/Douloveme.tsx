"use client";
import React, { useState } from "react";

export default function Douloveme() {
  var script1a = "YESSSS";
  var script1b = "Noooo";
  var script2a = "Ơ kìa hông thật à";
  var script2b = "Noooo";
  var script3a = "Cho chọn lại lần nữa nè";
  var script3b = "Noooo";
  var script4a = "Hông chịu đâu, chọn lại tiếp đi nè";
  var script4b = "Noooo";
  const [love, setLove] = useState(1);
  const [size, setSize] = useState(1);
  return (
    <div className="w-full ">
      <p className=" flex place-content-center text-lg text-center mb-4 items-center  sm:text-left text-black">
        Do you love me?
      </p>
      <div className="flex place-content-center w-full space-x-3 ">
        <button
          style={{ transform: "scale(" + size + ")" }}
          className="transition ease-in-out p-4 rounded-md delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
        >
          {love === 1 && script1a}
          {love === 2 && script2a}
          {love === 3 && script3a}
          {love >= 4 && script4a}
        </button>
        <button
          className="bg-red-400 p-3 rounded-md
        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300
      "
          onClick={() => {
            setLove(love + 1);
            setSize(size + 1);
          }}
        >
          {love === 1 && script1b}
          {love === 2 && script2b}
          {love === 3 && script3b}
          {love >= 4 && script4b}
        </button>
      </div>
    </div>
  );
}
