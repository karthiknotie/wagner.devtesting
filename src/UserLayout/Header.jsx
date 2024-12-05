import React from 'react'
import { PiStarFill } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";
import Logo from '../assets/Resources/wagner-logo.svg'

const Header = () => {
    return (
        <>
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="star-items">
                                <div className="item">
                                    <PiStarFill className='icon' />
                                    <p className='fontSize14 fontWeight300'>New Micro-Ceramic Technology</p>
                                </div>
                                <div className="item">
                                    <PiStarFill className='icon' />
                                    <p className='fontSize14 fontWeight300'>High-Quality</p>
                                </div>
                                <div className="item">
                                    <PiStarFill className='icon' />
                                    <p className='fontSize14 fontWeight300'>Free shipping Available</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="right">
                                <div className="item">
                                    <p className='fontSize14 fontWeight300'>Blog</p>
                                </div>
                                <div className="item">
                                    <CiGlobe className='icon' />
                                    {/* <ReactLanguageSelect
                                        className='language-selector'
                                        defaultLanguage="en"
                                        languages={["en", "fr", "de", "it", "es"]}
                                        customLabels={{ "en": "ENG", }} /> */}
                                    <div className="language-selector">
                                        <select className="select-language">
                                            <option value="en">ENG</option>
                                            <option value="fr">Français</option>
                                            <option value="de">Deutsch</option>
                                            <option value="it">Italiano</option>
                                            <option value="es">Español</option>
                                            {/* Add more languages here */}
                                        </select>
                                    </div>
                                </div>
                                <div className="item">
                                    <LuSearch className='icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="container">
                    <div className="header-items">
                        <div className="brand-logo">
                            <img src={Logo} alt="" />
                        </div>
                        <nav>
                            <div className="main-menu">
                                <ul>
                                    <li >
                                        <a href="/" className='active fontSize16 fontWeight300'>
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about" className='fontSize16 fontWeight300'>
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className='fontSize16 fontWeight300'>
                                            Applications
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className='fontSize16 fontWeight300'>
                                            Industries
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className='fontSize16 fontWeight300'>
                                            Products
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className='fontSize16 fontWeight300'>
                                            Shop
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className='fontSize16 fontWeight300'>
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="common-btn">
                            <button>Lets Connect</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header