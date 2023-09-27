import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Frontend Development",
    description:
      "In the frontend, I use JavaScript with the ReactJs library. As for CSS, I'm currently using TailwindCSS",
    link: "Learn more",
  },
  {
    name: "Software Engineering",
    description:
      "I am studying software engineering at ITPU. I am currently working for a junior degree.",
    link: "Learn more",
  },
  {
    name: "Videographing",
    description:
      "I have 5 years of experience in videography. I have satisfied about 300 clients in videography.",
    link: "Learn more",
  },
];
const linkForA = "#";
const Services = (props) => {
  return (
    <>
      <section className="section" id="services">
        <div className="container mx-auto">
          <div className="flex  flex-col lg:flex-row">
            {/* text */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 lg:bg-services btn lg:bg-bottom bg-no-repeat mix-blend-normal rounded-xl p-10 mr-5 mb-12 lg:mb-0"
            >
              
              <h2 className="h2 mb-6" style={{ color: `${props.color}` }}>
                What I Do.{" "}
              </h2>
              <h3 className="h3 max-w-[455px] mb-6">
                I'm a Frontend Developer with over 1 year of experience.
              </h3>
              <button
                className="btn btn-sm z-50"
                style={{
                  backgroundColor: `${props.color}`,
                  borderRadius: `${props.borderRadius}px`,
                }}
              >
                See my work
              </button>
            </motion.div>
            {/* services */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
            >
              <div className="">
                {services.map((service, index) => {
                  const { name, description, link } = service;
                  return (
                    <div
                      key={index}
                      style={{ borderBottom: `1px solid ${props.color}` }}
                      className="h-[146px] mb-[38px] flex"
                    >
                      <div className="max-w-[476px] ">
                        <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                          {name}
                        </h4>
                        <p className=" font-secondary leading-tight">
                          {description}
                        </p>
                      </div>
                      <div className="flex flex-col flex-1 items-start justify-center">
                        <a
                          href={linkForA}
                          className="btn w-9 h-9 mb-[42px] flex justify-center items-center z-50"
                          style={{
                            backgroundColor: `${props.color}`,
                            borderRadius: `${props.borderRadius}px`,
                          }}
                        >
                          <BsArrowUpRight />
                        </a>
                        <a
                          href={linkForA}
                          style={{ color: `${props.color}` }}
                          className="text-sm z-50"
                        >
                          {link}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
