import React from "react";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";
import BannerImg from "../public/banner.png";

const services = [
  {
    title: "Website Development",
    description:
      "Building Website from scratch with a focus on Mobile Responsiveness for all devices. specializes in creating modern, professional, and sleek UI designs, ensuring pixel-perfect precision to captivate your audience and enhance user experience.",
  },
  {
    title: "Build Website For an Agency",
    description:
      "Let's Build Professional website for your Business🔥 With Moder UI to Enhance your User Experience. Pixel Perfect UI according your Business. So, Let's work together in Modern Professional Way",
  },
  {
    title: "Website Designing in Figma",
    description:
      "Let's Create Professional, Modern Websites. Modern UI to Enhance you User Experience, Best UI of Websites for your Professional Business. Pixel Perfect Enhance your User Experience.",
  },
  {
    title: "Web Application Development",
    description:
      "IF you want to build Full stack Web Application with User Authentication and Payment Gateway and All Features that You can Imagine. with Pixel-Perfect UI according your Business!",
  },
];

const Approach = () => {
  return (
    <div className="py-20 w-full mt-[3rem]" id="Services">
      <h1 className="text-4xl font-bold text-center mb-12">
        My <span className="text-purple">Services</span>
      </h1>
      <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 px-4">
        {services.map((service, index) => (
          <Button
            key={index}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-lg transform transition-transform hover:scale-105"
          >
            <div className="flex flex-col p-6 gap-6">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white  mb-4">
                  {service.title}
                </h3>
                <div className="flex flex-wrap gap-4 mt-[29px] mb[15px]">
                  {service.description}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
      <Image
        src={BannerImg}
        className="w-[970px] mx-auto mt-[158px] rounded-md" alt="image"
      />
    </div>
  );
};

export default Approach;
