import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const forHomeHref = {
        gitHub: "https://instagram.com/_abdurakhmon._27",
        instagram: "https://github.com/abdurahmon27",
        linkedIn: "https://www.linkedin.com/in/abdurahmon-mamadiyorov-23607525b/"
      };
      let blank = "_blank";
  return (
    <section
      id="footer"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center bg-transparent"
    >
      <div className="container mx-auto bg-transparent">
        <div className="flex items-center justify-center">
          <pre className="font-primary">
            ©2023 <a href={"https://bekzotovich.uz"}>bekzotovich.uz </a> all
            rights reserved
          </pre>
        </div>
        <div className="flex items-center justify-center my-5">
        <a href={forHomeHref.gitHub} target={blank} className="mx-5">
          <FaInstagram />
        </a>
        <a href={forHomeHref.instagram} target={blank} className="mx-5">
          <FaGithub />
        </a>
        <a href={forHomeHref.linkedIn} target={blank} className="mx-5">
          <FaLinkedinIn />
        </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
