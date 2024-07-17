"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import Image from "next/image";
import bgImg from "../public/bg.png";

const RecentProjects = () => {
  return (
    <div className="py-25 mt-5" id="projects">
      <h1 className="heading">
        A Selection Of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] project-card"
            key={item.id}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[14px] border-2 border-[#d1abf7] p-[11px] card-content"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    src={bgImg}
                    alt="bgimg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute bottom-0 w-full h-full">
                  <Image
                    src={item.img}
                    alt="fit"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="bottom"
                  />
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center icon-container"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={`icon${index}`}
                        width={140}
                        height={20}
                        className="p-2 iconlab"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple hover:text-white">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <style jsx>{`
        .project-card {
          perspective: 1500px;
        }

        .card-content {
          transition: transform 0.6s ease, box-shadow 0.6s ease;
          transform-style: preserve-3d;
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
        }

        .project-card:hover .card-content {
          transform: rotateY(15deg) rotateX(10deg) translateZ(20px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .card-content img {
          transition: transform 0.6s ease;
        }

        .project-card:hover .card-content img {
          transform: scale(1.1);
        }

        .icon-container {
          transition: transform 0.6s ease, background 0.6s ease;
        }

        .project-card:hover .icon-container {
          transform: translateY(-5px);
          background: rgba(0, 0, 0, 0.8);
        }

        .project-card a:hover .text-purple {
          color: #ffffff;
        }

        .iconlab{
          width:23px !important;
        }
      `}</style>
    </div>
  );
};

export default RecentProjects;
