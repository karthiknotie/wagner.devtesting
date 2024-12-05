import React from 'react'
import CompanyWagnerImg from '../../assets/Resources/our-company-wagner.svg'
import { PiTarget } from "react-icons/pi";
import { PiHandshakeLight } from "react-icons/pi";
import CarImage from '../../assets/Resources/car.png'
import MapImage from '../../assets/Resources/branch-map.png'
import { GoArrowUpRight } from "react-icons/go";
import { PiPhoneCallLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import TestiImg1 from '../../assets/Resources/test-img-1.jpg'
import TestiImg2 from '../../assets/Resources/test-img-2.jpg'
import TestiProfile from '../../assets/Resources/test-profile.jpg'

const About = () => {
    return (
        <>
            <div className="breadcrumb">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h1>About <span>Us</span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                </div>
            </div>

            <div className="our-company space">
                <div className="container">
                    <div className="title-content title-content-all text-center">
                        <div className="sub-heading-dark">
                            <button>OUR COMPANY</button>
                        </div>
                        <div className="title">
                            <h1>At Wagner German Oil, we produce premium oils and lubricants that meet the #1 & highest industry standards. With decades of expertise, we deliver reliable, sustainable products that power machines and engines worldwide.</h1>
                        </div>
                    </div>
                    <div className="row our-company-content">
                        <div className="col-lg-5">
                            <div className="image">
                                <img src={CompanyWagnerImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="right-content">
                                <div className="item">
                                    <h2>Specialization:</h2>
                                    <p>We produce high-performance oils and lubricants for automotive and industrial applications.</p>
                                </div>
                                <div className="item">
                                    <h2>Industry Standards:</h2>
                                    <p>Our products meet the highest global standards for reliable performance.</p>
                                </div>
                                <div className="item">
                                    <h2>Expertise:</h2>
                                    <p>Decades of experience enable us to create innovative, high-quality products.</p>
                                </div>
                                <div className="item">
                                    <h2>Commitment:</h2>
                                    <p>We are dedicated to performance, reliability, and sustainability.</p>
                                </div>
                                <div className="item">
                                    <h2>Global Reach:</h2>
                                    <p>Our products serve customers worldwide, meeting diverse industry needs.</p>
                                </div>
                                <div className="item">
                                    <h2>Impact:</h2>
                                    <p>Our oils improve efficiency, reduce wear, and extend equipment life globally.</p>
                                </div>
                                <div className="cta">
                                    <div className="left">
                                        <p>Want to make an impact with us?</p>
                                    </div>
                                    <div className="title-btn">
                                        <div className="test-btn">
                                            <button>Let's Connect</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mission space">
                <div className="container">
                    <div className="title-content title-content-all text-center">
                        <div className="title text-white">
                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="item">
                                <div className="head">
                                    <div className="icon">
                                        <PiTarget />
                                    </div>
                                    <h2>MISSION</h2>
                                </div>
                                <div className="icon-overlay">
                                    <PiTarget />
                                </div>
                                <p>Wagner loves gear – new and old alike. We love preserving all kinds of machinery in order for it to last for a much longer time. This is the mission behind our products – because preserving is always the silver bullet to environmental protection. Combine it with the joy of functional gear and the cost savings and you know, what we mean.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="item">
                                <div className="head">
                                    <div className="icon">
                                        <PiHandshakeLight />
                                    </div>
                                    <h2>COMMITMENT</h2>
                                </div>
                                <div className="icon-overlay">
                                    <PiHandshakeLight />
                                </div>
                                <p>As lubrication specialists we combine all our qualified knowledge of lubricants with our know-how in gear technology – new and old alike – to provide our customers with optimized, specifically adapted, superior products for their demands in automotive and industrial lubrication. Thus, we want to help saving energy, improving efficiency and reducing wear in a world where ecological awareness dramatically gains importance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="our-milestone space">
                <div className="container">
                    <div className="row">
                        <div className="main-title">
                            <div className="title-content title-content-all left-title">
                                <div className="sub-heading-dark">
                                    <button>OUR MILESTONE</button>
                                </div>
                                <div className="title">
                                    <h1><span>30+ Years of </span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                                </div>
                            </div>
                            <div className="title-btn">
                                <div className="test-btn">
                                    <button>Partner with us</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="milestone-content">
                            <div className="item active">
                                <div className="icon"></div>
                                <div className="content">
                                    <h2>Now</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon"></div>
                                <div className="content">
                                    <h2>2020</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon"></div>
                                <div className="content">
                                    <h2>2020</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="item final">
                                <div className="icon"></div>
                                <div className="content">
                                    <h2>1994</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="shapes">
                                <div className="line"></div>
                                <div className="car">
                                    <img src={CarImage} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="countries-worldwide space">
                <div className="container">
                    <div className="title-content title-content-all text-center">
                        <div className="title">
                            <h1>Over <span>7+</span> Countries Worldwide</h1>
                        </div>
                    </div>
                    <div className="branch-content">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="image">
                                    <img src={MapImage} alt="" />
                                </div>
                                <div className="content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <div className="common-border-btn banner-btn">
                                        <button>Join with us<GoArrowUpRight className='icon' /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="branch-items">
                                    <div className="item">
                                        <div className="title-head">
                                            <h1>Germany</h1>
                                            <div className="icon">
                                                <PiPhoneCallLight />
                                                <CiLocationOn />
                                            </div>
                                        </div>
                                        <p>WAGNER Spezialschmierstoffe GmbH & Co. KG, Speckbrodi 8 • 86759 Wechingen</p>
                                    </div>
                                    <div className="item">
                                        <div className="title-head">
                                            <h1>India</h1>
                                            <div className="icon">
                                                <PiPhoneCallLight />
                                                <CiLocationOn />
                                            </div>
                                        </div>
                                        <p>WAGNER Spezialschmierstoffe GmbH & Co. KG, Speckbrodi 8 • 86759 Wechingen</p>
                                    </div>
                                    <div className="item">
                                        <div className="title-head">
                                            <h1>USA</h1>
                                            <div className="icon">
                                                <PiPhoneCallLight />
                                                <CiLocationOn />
                                            </div>
                                        </div>
                                        <p>WAGNER Spezialschmierstoffe GmbH & Co. KG, Speckbrodi 8 • 86759 Wechingen</p>
                                    </div>
                                    <div className="item">
                                        <div className="title-head">
                                            <h1>UK</h1>
                                            <div className="icon">
                                                <PiPhoneCallLight />
                                                <CiLocationOn />
                                            </div>
                                        </div>
                                        <p>WAGNER Spezialschmierstoffe GmbH & Co. KG, Speckbrodi 8 • 86759 Wechingen</p>
                                    </div>
                                    <div className="item">
                                        <div className="title-head">
                                            <h1>Russia</h1>
                                            <div className="icon">
                                                <PiPhoneCallLight />
                                                <CiLocationOn />
                                            </div>
                                        </div>
                                        <p>WAGNER Spezialschmierstoffe GmbH & Co. KG, Speckbrodi 8 • 86759 Wechingen</p>
                                    </div>
                                    <div className="item">
                                        <div className="title-head">
                                            <h1>Africa</h1>
                                            <div className="icon">
                                                <PiPhoneCallLight />
                                                <CiLocationOn />
                                            </div>
                                        </div>
                                        <p>WAGNER Spezialschmierstoffe GmbH & Co. KG, Speckbrodi 8 • 86759 Wechingen</p>
                                    </div>
                                    <div className="item">
                                        <div className="title-head">
                                            <h1>Australia</h1>
                                            <div className="icon">
                                                <PiPhoneCallLight />
                                                <CiLocationOn />
                                            </div>
                                        </div>
                                        <p>WAGNER Spezialschmierstoffe GmbH & Co. KG, Speckbrodi 8 • 86759 Wechingen</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* testimonial-section */}
            <div className="testimonial-section space">
                <div className="container">
                    <div className="title-content title-content-all text-center">
                        <div className="sub-heading-dark">
                            <button>TESTIMONIAL</button>
                        </div>
                        <div className="title">
                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                        </div>
                    </div>
                    <div className="testimonial-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="image">
                                                <img src={TestiImg1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="content">
                                                <div className="review">
                                                    <span>“</span>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                                </div>
                                                <div className="review-profile">
                                                    <div className="profile">
                                                        <img src={TestiProfile} alt="" />
                                                    </div>
                                                    <div className="author">
                                                        <h5>Jake Smith</h5>
                                                        <p>CEO, Google</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="image">
                                                <img src={TestiImg2} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="content">
                                                <div className="review">
                                                    <span>“</span>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                                </div>
                                                <div className="review-profile">
                                                    <div className="profile">
                                                        <img src={TestiProfile} alt="" />
                                                    </div>
                                                    <div className="author">
                                                        <h5>Jake Smith</h5>
                                                        <p>CEO, Google</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About