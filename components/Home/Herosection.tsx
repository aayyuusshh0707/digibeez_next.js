"use client";
import React from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { title, subtitle } from "@/components/primitives";

export function Herosection() {

  const words = [
    {
      text: "Success",
    },
    {
      text: "Start",
    },
    {
      text: "With",
    },
    {
      text: "Smart",
    },
    {
      text: "Training!",
      className: "text-yellow-500 dark:text-yellow-500  ",
    },

  ];
 
  return (
    <div>
      <video
        src='/assets/videos/heroclip.mp4'
        autoPlay 
        muted 
        loop 
        playsInline
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0" />
      <div className="flex flex-col items-center justify-center relative z-10 ">
        <div className={subtitle({ class: "mb-10 max-w-xl text-center justify-center dark:text-white text-white " })}>
          The road to freedom starts here
        </div>
        <TypewriterEffect words={words} />
        <div className={subtitle({ class: "mt-10 max-w-xl text-center justify-center text-white " })}>
          Best Digital Marketing Services & Online Certification Course with 100% Job Placement Guaranteed
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <button className="w-40 h-10 rounded-xl border-black bg-amber-400 dark:text-black text-sm">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
}
