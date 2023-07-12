import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = (props) => {
  return (
    <section id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4
                className="text-xl uppercase font-medium mb-2"
                style={{ color: `${props.color}` }}
              >
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together.!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:z-50 rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            style={{ border: `1px solid ${props.color}` }}
          >
            <input
              className=" bg-transparent py-3 outline-none w-full placeholder:text-white transition-all"
              style={{ borderBottom: `1px solid ${props.color}` }}
              type="email"
              placeholder="Your name"
            />
            <input
              className=" bg-transparent py-3 outline-none w-full placeholder:text-white transition-all"
              style={{ borderBottom: `1px solid ${props.color}` }}
              type="email"
              placeholder="Your email"
            />
            <textarea
              className=" bg-transparent py-12 outline-none w-full placeholder:text-white transition-all resize-none mb-12"
              placeholder="Your Message"
              style={{ borderBottom: `1px solid ${props.color}` }}
            ></textarea>
            <button
              style={{
                backgroundColor: `${props.color}`,
                borderRadius: `${props.borderRadius}px`,
              }}
              className="btn btn-sm"
            >
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
