import React from "react";
import { IoSettings } from "react-icons/io5";
import { Drawer } from "antd";
import {TfiClose} from "react-icons/tfi";
import  BgChoosing from "../components/data";

const Configuration = () => {
  //drawer
  const [open, setOpen] = React.useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  //input
  const [borderrad, setBorderrad] = React.useState(100);

  //color palette
  const [color, setColor] = React.useState("rgba(255, 255, 255, 0.5)");
  const colors = {
    color1: "rgba(255, 255, 255, 0.5)",
    color2: "#606C5D",
    color3: "#676FA3",
    color4: "#4C4C6D",
    color5: "#F99417"
  };
  return (
    <div className="z-50 fixed top-10 right-0">
      <button
        className="shadow bg-white/10 backdrop-blur-[3px] p-5 rounded-l-full"
        onClick={showDrawer}
      >
        <IoSettings className="rotate-center" />
      </button>
      <Drawer placement="right" onClose={onClose} open={open} style={{backgroundColor: 'rgb(47, 46, 52)', color: '#fff'}} closeIcon={<TfiClose className=" text-[#fff]" />} headerStyle={{backgroundColor: 'rgb(47, 46, 52)'}}>
        <div className="text-[1.5rem] absolute top-[0.65rem] left-[4rem]">
          Settings
        </div>
        <div  className="flex items-start justify-center flex-col">
          <span className=" text-lg">Color palette:</span>
          <ul className="flex items-center justify-center my-5">
            <li
              className={`w-6 h-6 rounded-full flex items-center justify-center mx-5`}
              onClick={() => {
                setColor(colors.color1);
              }}
            >
              <div className={`w-6 h-6 rounded-full`} style={{backgroundColor: `${colors.color1}`}}></div>
            </li>
            <li
              className=" w-6 h-6 rounded-full flex items-center justify-center mx-5"
              onClick={() => setColor(colors.color2)}
            >
              <div className={`w-6 h-6 rounded-full`} style={{backgroundColor: `${colors.color2}`}}></div>
            </li>
            <li
              className=" w-6 h-6 rounded-full flex items-center justify-center mx-5"
              onClick={() => setColor(colors.color3)}
            >
              <div className={`w-6 h-6 rounded-full`}  style={{backgroundColor: `${colors.color3}`}}></div>
            </li>
            <li
              className=" w-6 h-6 rounded-full flex items-center justify-center mx-5"
              onClick={() => setColor(colors.color4)}
            >
              <div className={`w-6 h-6 rounded-full`}  style={{backgroundColor: `${colors.color4}`}}></div>
            </li>
            <li
              className=" w-6 h-6 rounded-full flex items-center justify-center mx-5"
              onClick={() => setColor(colors.color5)}
            >
              <div className={`w-6 h-6 rounded-full`}  style={{backgroundColor: `${colors.color5}`}}></div>
            </li>
          </ul>
        </div>
        <div className="flex items-start justify-center flex-col">
          <span className="text-lg my-5">Setting corners:</span>
          <div className="range">
          <input
          style={{backgroundColor: `${colors.color1}`}}
            type="range"
            min={1}
            step={1}
            max={100}
            onChange={(event) => setBorderrad(event.target.value)}
            value={borderrad}
          />
          <span className="mx-5 flex items-center justify-center">{borderrad}</span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div
            className={`w-[70px] h-[70px] border shadow-lg mx-5`}
            style={{ borderRadius: `${borderrad}px`, backgroundColor: `${color}` }}
          ></div>
          <div
            className={`w-[96px] h-[350px] border shadow-lg mx-5`}
            style={{ borderRadius: `${borderrad}px` }}
          ></div>
        </div>
        <div className="my-10"></div>
        <div  className="flex items-start justify-center flex-col">
          <span className="text-lg">Set background:</span>
          <div className="grid grid-cols-3 md:grid-cols-3">
              {
                BgChoosing.map((choosen) => {
                  const {id, image} = choosen;
                  return (
                    <div key={id} className="w-[70px] h-[70px] bg-black mx-3 my-3 rounded-lg">
                      <img alt={id} src={image} className=" object-cover h-full w-full rounded-lg" />
                    </div>
                  );
                })
              }
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Configuration;
