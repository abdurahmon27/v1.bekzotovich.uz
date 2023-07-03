import React from 'react';
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Header = (props) => {
  return (
    <>
      <header className='py-8'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <span>.bekzotovich12</span>
            <button className='btn btn-sm flex items-center justify-center font-secondary' style={{backgroundColor: `${props.color}`, borderRadius: `${props.borderRadius}px`}}>hire me <MdOutlineArrowForwardIos /></button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
