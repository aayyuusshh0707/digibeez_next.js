"use client";
import React from "react";
// import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Courses() {
  return (
    <div className="flex  flex-col w-full min-h-screen bg-gradient-to-b from-[#394966] via-[#1b1d22] to-[#141414] dark:from-[#1b1d22] dark:via-[#141414] dark:to-black">
      <div className="px-4 py-8 md:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center">
          {/* Left Section */}
          <div className="mt-6 lg:mt-10 lg:mb-10">
            <div className="text-white dark:text-gray-300">
              <div className="relative z-10 flex gap-3">
                <Image
                  alt="star-icon"
                  className="h-8 w-[132px]"
                  src="https://files.codingninjas.com/fir-professional-tag-.webp"
                />
              </div>
              <h1 className="text-xl md:text-2xl lg:text-[32px] font-bold leading-tight text-[#fafafa] dark:text-gray-100 mt-6">
                Full Stack Web Development Job Bootcamp
              </h1>
              <p className="text-sm md:text-base text-[#bbbbbb] dark:text-gray-400 mt-4">
                Choose MERN stack or Spring Boot and acquire expertise through
                practical application and real-world projects.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-6">
                {[
                  {
                    icon: "https://files.codingninjas.com/live-one-one-doubt-support-34352.svg",
                    text: "Placement assistance",
                  },
                  {
                    icon: "https://files.codingninjas.in/future-ready-curriculam-1720990542.svg",
                    text: "AI-infused curriculum",
                  },
                  {
                    icon: "https://files.codingninjas.com/placement-assistance-34353.svg",
                    text: "1:1 mentorship",
                  },
                  {
                    icon: "https://files.codingninjas.com/stanford-iit-maang-faculty-34354.svg",
                    text: "Faculty from MAANG",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[#2f2f31] dark:bg-gray-800 text-[#979797] dark:text-gray-500 flex items-center gap-2 px-3 py-2 rounded-full"
                  >
                    <img
                      alt={feature.text}
                      className="h-5 w-5"
                      src={feature.icon}
                    />
                    <span className="text-xs font-bold">{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#2b303c] dark:bg-gray-900 gap-3 justify-evenly flex  md:gap-4 mt-10 p-4 rounded-xl w-full md:w-3/4 lg:w-[411px]">
                {[
                  { value: "95%", label: "placement rate" },
                  { value: "1200+", label: "Companies Hiring" },
                  { value: "128%", label: "Average hike" },
                  { value: "1.5 L+", label: "Learners" },
                ].map((stat, index, array) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col ">
                      <div className="text-base md:text-xl font-bold dark:text-white">
                        {stat.value}
                      </div>
                      <p className="text-xs font-medium dark:text-gray-400">
                        {stat.label}
                      </p>
                    </div>
                    {index < array.length - 1 && (
                      <div className="hidden md:block border-l border-[#394871] dark:border-gray-700" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex items-center text-sm md:text-base text-[#bbbbbb] dark:text-gray-400 mt-6">
                Know in-depth details in our free webinar
                <Image
                  alt="Pointing finger icon"
                  className="h-8 w-8 ml-3 hidden sm:block"
                  src="https://files.codingninjas.in/hand_04-34708.webp"
                />
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="mt-10 lg:mt-0 w-full md:w-3/4 lg:w-[440px]">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
              <div className="text-lg md:text-xl font-bold text-[#141414] dark:text-white mb-5">
                Book a{" "}
                <span className="bg-gradient-to-r from-[#FA00FF] to-[#FF8A00] text-transparent bg-clip-text">
                  free live webinar
                </span>
                <span className="text-sm font-normal text-[#7f7f7f] dark:text-gray-400">
                  {" "}
                  to know more
                </span>
              </div>
              <form className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#141414] dark:text-gray-300 mb-2">
                    Name <span className="text-[#f6655a]">*</span>
                  </label>
                  <input
                    className="h-10 w-full px-4 border border-gray-300 rounded-lg text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none"
                    placeholder="Enter name"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#141414] dark:text-gray-300 mb-2">
                    Email <span className="text-[#f6655a]">*</span>
                  </label>
                  <input
                    className="h-10 w-full px-4 border border-gray-300 rounded-lg text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none"
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#141414] dark:text-gray-300 mb-2">
                    Phone Number <span className="text-[#f6655a]">*</span>
                  </label>
                  <div className="flex h-10 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                    <div className="flex items-center px-3 border-r border-gray-300 dark:border-gray-600">
                      <Image
                        alt="Indian Flag"
                        className="h-5 w-5"
                        src="https://files.codingninjas.com/flag-5-1732876121.webp"
                      />
                    </div>
                    <input
                      className="flex-1 px-4 text-sm dark:bg-gray-700 dark:text-gray-200 focus:outline-none"
                      placeholder="Phone number"
                      type="tel"
                    />
                  </div>
                </div>
                <button
                  className="h-12 w-full bg-amber-500 text-white font-bold text-base rounded-lg flex items-center justify-center gap-3 mt-4"
                  type="submit"
                >
                  Continue booking webinar
                  {/* <ArrowRight className="h-5 w-5" /> */}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
