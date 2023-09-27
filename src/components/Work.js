import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image1 from "../assets/jizzaxGuide.png";
import Image2 from "../assets/jizzaxGuide.png";
import Image3 from "../assets/jizzaxGuide.png";


const Work = (props) => {
  return (
    <div id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2
                className="h2 leading-tight"
                style={{ color: `${props.color}` }}
              >
                My Latest <br /> Work.
              </h2>
              <p className="max-w-sm mb-16 text-[15px]">
                Currently I am working on 3 big projects. I did not put them in
                the portfolio for privacy.
                Soon, InshaAllah, I will make a projects page for my portfolio.
              </p>
              <button
                className="btn btn-sm z-50"
                style={{
                  backgroundColor: `${props.color}`,
                  borderRadius: `${props.borderRadius}px`,
                }}
              >
                View all Projects
              </button>
            </div>
            <div
              className="group relative overflow-hidden border-2 rounded-md btn"
              style={{ border: `1px solid ${props.color}` }}
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute lg:z-50 transition-all duration-300"></div>
              <img
                className="lg:group-hover:scale-125 transition-all duration-500"
                src={Image1}
                alt=" "
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 lg:z-50">
                <span style={{ color: `${props.color}` }}>
                  Frontend Development
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 lg:z-50">
                <span className="text-3x1 text-white">Jizzax Guide</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <div
              className="group relative overflow-hidden border-2 rounded-md btn"
              style={{ border: `1px solid ${props.color}` }}
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute lg:z-50 transition-all duration-300"></div>
              <img
                className="lg:group-hover:scale-125 transition-all duration-500"
                src={Image2}
                alt=" "
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 lg:z-50">
                <span style={{ color: `${props.color}` }}>
                  Frontend Development
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 lg:z-50">
                <span className="text-3x1 text-white">Jizzax Guide</span>
              </div>
            </div>
            <div
              className="group relative overflow-hidden border-2 rounded-md btn"
              style={{ border: `1px solid ${props.color}` }}
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute lg:z-50 transition-all duration-300"></div>
              <img
                className="lg:group-hover:scale-125 transition-all duration-500"
                src={Image3}
                alt=" "
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 lg:z-50">
                <span style={{ color: `${props.color}` }}>
                  Frontend Development
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 lg:z-50">
                <span className="text-3x1 text-white">Jizzax Guide</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
