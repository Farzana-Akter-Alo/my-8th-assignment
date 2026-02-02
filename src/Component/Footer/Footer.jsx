import React from "react";
import NavImg from "../../assets/logo.png";
import FbImg from "../../assets/facebook.png";
import TwImg from "../../assets/twitter.png";
import InImg from "../../assets/linkdIn.png";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-10">
        <aside className="grid-flow-col items-center">
          <img className="w-8" src={NavImg} alt="" />
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener norefferer"
          >
            <img src={FbImg} alt="" />
          </a>
          <a
            href="https://x.com/?lang=en"
            target="_blank"
            rel="noopener norefferer"
          >
            <img src={TwImg} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/login"
            target="_blank"
            rel="noopener norefferer"
          >
            <img src={InImg} alt="" />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
