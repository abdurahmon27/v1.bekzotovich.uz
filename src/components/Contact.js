import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";

const Contact = (props) => {
  const form = React.useRef();
  const [value, setValue] = React.useState("Send Message");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hz6hmb8",
        "template_8dh2h5m",
        form.current,
        "5e8grWVLAfL_2GfSZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const setTime = () => {
    setValue("Sended")
    setTimeout(() => {
      setValue("Send Message")
    }, 3000)
  }
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
            className="flex-1 btn lg:z-50 rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            style={{ border: `1px solid ${props.color}` }}
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className=" bg-transparent py-3 outline-none w-full placeholder:text-white transition-all px-3 focus:rounded-md"
              style={{ borderBottom: `1px solid ${props.color}`}}
              type="name"
              placeholder="Your name"
              name="user_name"
            />
            <input
              className=" bg-transparent py-3 outline-none w-full placeholder:text-white transition-all px-3 focus:rounded-md"
              style={{ borderBottom: `1px solid ${props.color}` }}
              type="email"
              placeholder="Your email"
              name="user_email"
            />
            <textarea
              className=" bg-transparent py-12 outline-none w-full placeholder:text-white transition-all resize-none mb-12"
              placeholder="Your Message"
              style={{ borderBottom: `1px solid ${props.color}` }}
              name="message"
            ></textarea>
            <button
              style={{
                backgroundColor: `${props.color}`,
                borderRadius: `${props.borderRadius}px`,
              }}
              type="submit"
              className="btn btn-sm cursor-pointer"
              onClick={
                setTime
              }
            >
              {value}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
