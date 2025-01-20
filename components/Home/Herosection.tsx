"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { title, subtitle } from "@/components/primitives";
import { Cover } from "../ui/cover";
import { BackgroundLines } from "@/components/ui/background-lines";

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
    <BackgroundLines>
    <div className="flex flex-col items-center justify-center">
      <div className={subtitle({ class: "mb-10 max-w-xl text-center justify-center" })}>
        The road to freedom starts here
      </div>
      <TypewriterEffect words={words} />
      <div className={subtitle({ class: "mt-10 max-w-xl   text-center justify-center" })}>
        Best Digital Marketing Services & Online Certification Course with 100% Job Placement Guaranteed
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
      
        <button className="w-40 h-10 rounded-xl border-black bg-amber-400 dark:text-black text-sm">
          Join now
        </button>
      </div>
    </div>
    </BackgroundLines>
  );
}
