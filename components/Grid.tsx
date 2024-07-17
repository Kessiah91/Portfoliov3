import React, { useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";
import "./style.css";
import Typed from "typed.js";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { FaLink } from "react-icons/fa";
import lapt from "../public/aaa.jpg";

const Grid = () => {
  useEffect(() => {
    var typed = new Typed(".multiple-text", {
      strings: [
        "Frontend Developer",
        "UI/UX Designer",
        "Software Engineer",
        "Frontend Developer",
        "Web Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup function to destroy Typed instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="pb-[5rem] pt-[9rem] containerlarh" id="about">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <section className="home">
        <div className="home-content">
          <h3>Hello, It&apos;s Me</h3>
          <h1>Kessiah Providence</h1>
          <h3>
            And I&apos;m a <span className="multiple-text"></span>
          </h3>
          <p>
            I am Frontend Developer experience in Creating Professional, Modern
            Websites. Constantly building on my skills to make any dream a reality.
          </p>

          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/kessiah-providence9/"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Kessiah91"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/KessiahProvide1"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="mailto:Kessiahp91@gmail.com"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaLink />
            </a>
          </div>
          <a
            href="/Kessiah-P-Resume.pdf"
            className="btn"
            download
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>

        <div className="home-image">
          <Image
            src="/kessiah.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            
          />
        </div>
      </section>

      <style jsx>{`
        .home {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .home-content, .home-image {
          flex: 1;
          padding: 1rem;
        }

        .home-image {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 2rem 0;
          padding: 1rem;
          box-sizing: border-box;
          position: relative; // Added for layout fill
          height: 500px; // Set a specific height for the image container
        }

        @media (max-width: 768px) {
          .home {
            flex-direction: column;
          }

          .home-image {
            height: 50vh;
          }
        }

        @media (max-width: 480px) {
          .home {
            flex-direction: column;
          }

          .home-content, .home-image {
            width: 100%;
          }

          .home-image {
            height: 50vh;
          }

          .home-content {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Grid;
