import React from 'react';
import logo from "../assets/pk-logo.png";

const Header = () => {
    return (
        <div className='h-24 fixed w-full top-0 bg-white z-10 shadow-md'>
            <img src={logo} alt="logo" className='h-16 my-4 ml-8' />
        </div>
    )
}

export default Header;
