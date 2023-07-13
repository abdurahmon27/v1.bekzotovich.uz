import React from 'react';
import { BiCoffeeTogo } from "react-icons/bi";

const Header = (props) => {
  let linkBuy = "https://www.buymeacoffee.com/bekzotovich";
  let blank = "_blank";
  return (
    <>
      <header className='py-8'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <span>bekzotovich</span>
            <a href={linkBuy} className='btn btn-sm flex items-center justify-center font-secondary' target={blank} style={{backgroundColor: `${props.color}`, borderRadius: `${props.borderRadius}px`}}><BiCoffeeTogo className='mx-1' /> buy me a coffee </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
