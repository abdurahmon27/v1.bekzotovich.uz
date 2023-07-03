import React from 'react';
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareDots } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = (props) => {
  return (
    <>

      <nav className='fixed lg:left-2 w-full top-1/2 -translate-y-1/2 overflow-hidden z-50 max-md:fixed max-md:bottom-8 max-md:w-full max-md:overflow-hidden max-md:z-50 max-md:top-[auto] max-md:-translate-y-0'>
        <div className="cantainer mx-auto">
          <div className='w-[96px] shadow bg-white/10 backdrop-blur-[3px] rounded-full h-[460px] px-5 py-5 flex flex-col justify-between items-center max-md:flex-row text-2x1 text-white/60 max-md:w-full max-md:h-[96px] max-md:max-w-[460px] max-md:mx-auto '>
            <Link to='home' offset={-200} activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BiHomeAlt />
            </Link>
            <Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BiUser />
            </Link>
            <Link to='services' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BsClipboardData />
            </Link>
            <Link to='work' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BsBriefcase />
            </Link>
            <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BsChatSquareDots />
            </Link>
          </div>
        </div>
      </nav>

    </>)
    ;
};

export default Nav;
