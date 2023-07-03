import React from "react";
import Image from "../assets/avatar.svg";
import Image2 from "../assets/avatar.png";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  const forHomeHref = "#";

  return (
    <>
      <section
        id="home"
        className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
            <div className="flex-1 text-center font-secondary lg:text-left">
              <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-[35px] fontbolf mb-[20px] leading-[0.8] lg:text-[55px] pl-12 max-md:pl-0"
              >
                Abdurahmon <span>Mamadiyorov</span>
              </motion.h1>
              <div className="items-center justify-center flex lg:hidden">
                <motion.div
                  variants={fadeIn("up", 0.45)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="mb-6 text-[36px] lg:text-[30px] font-secondary font-semibold leading-[-\1] bg-white/10 p-3 w-[84%] flex items-center rounded-full"
                >
                  <pre></pre>
                  <span className="mr-4 text-white text-[25px]">I am a</span>
                  <TypeAnimation
                    sequence={[
                      "Developer",
                      2000,
                      "Videographer",
                      2000,
                      "Designer",
                      2000,
                    ]}
                    speed={50}
                    className="text-[25px] lowercase text-accent font-secondary"
                    wrapper="span"
                    repeat={Infinity}
                  />
                </motion.div>
              </div>
              <div className="items-center justify-center hidden lg:flex">
                <motion.div
                  variants={fadeIn("up", 0.45)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="mb-6 text-[36px] lg:text-[30px] font-secondary font-semibold leading-[-1] bg-white/10 p-3 w-[84%] flex items-center rounded-full"
                >
                  <pre>
                    <span className="text-[25px] text-green-400 font-tortinchi">
                      {" "}
                      ${" "}
                    </span>
                  </pre>
                  <span className="mr-4 text-white text-[30px] font-tortinchi">
                    I am a
                  </span>
                  <TypeAnimation
                    sequence={[
                      "Developer",
                      2000,
                      "Videographer",
                      2000,
                      "Designer",
                      2000,
                    ]}
                    speed={50}
                    className="text-[25px] lowercase text-green-400 font-tortinchi"
                    wrapper="span"
                    repeat={Infinity}
                  />
                </motion.div>
              </div>
              <motion.p
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="mb-8 max-w-lg mx-auto lg:mx-0 pl-12 max-md:pl-0"
              >
                Amet exercitation ea minim cupidatat.Aute deserunt aliqua quis
                elit aliquip aute.
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 pl-12 max-md:pl-0"
              >
                <button className="btn btn-lg">Contact me</button>
                <a href={forHomeHref} className="text-gradient btn-link">
                  Download CV
                </a>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 pl-[55px] max-md:pl-0"
              >
                <a href={forHomeHref}>
                  <FaInstagram />
                </a>
                <a href={forHomeHref}>
                  <FaGithub />
                </a>
                <a href={forHomeHref}>
                  <FaLinkedinIn />
                </a>
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className=" hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
            >
                <img
                  src={Image}
                  alt="avatar"
                  className=" h-[320px] mix-blend-lighten lg:max-w-[482px] rounded-full"
                />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
