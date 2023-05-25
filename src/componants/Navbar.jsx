import React, { useState } from 'react'
import { RiCloseFill, RiMenu3Line } from 'react-icons/ri'
import gptlogo from '../assets/logo.svg'


const Menu = () => {
    return (
        <ul>
            <li><a href='/#home'>Home</a></li>
            <li><a href='/#wgpt3'>What is GPT?</a></li>
            <li><a href='/#possibility'>Open AI</a></li>
            <li><a href='/#features'>Case Studies</a></li>
            <li><a href='/#blog'>Library</a></li>
        </ul >
    )
}


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className='navbar '>
            <div className="navbar_content">
                <div className="navbar_logo">
                    <img src={gptlogo} alt="Logo" />
                </div>
                <div className="navbar_links">
                    <Menu />
                </div>
                <div className="navbar_sign_content">
                    <div className='navbar_sign_text'>
                        <p className='mb-0'> Sign in</p>
                        <div className="navbar_sign_btn">
                            <button>Sign up</button>
                        </div>
                    </div>
                    <div className="navbar_menu">
                        {
                            toggleMenu
                                ? <RiCloseFill size={30} onClick={() => setToggleMenu(false)} />
                                : <RiMenu3Line size={30} onClick={() => setToggleMenu(true)} />
                        }

                        {
                            toggleMenu && <div className='navbar_links_menu '>
                                <div className="navbar_links_menu_container scale-up-center">
                                    <Menu />
                                    <div className='navbar_links_menu_sign'>
                                        <p>Sign in</p>
                                        <div className="navbar_sign_btn">
                                            <button>Sign up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar