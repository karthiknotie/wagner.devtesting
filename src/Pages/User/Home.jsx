import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowUpRight } from "react-icons/go";
import VehicleIcon1 from '../../assets/Resources/vehicle1.svg'
import VehicleIcon2 from '../../assets/Resources/vehicle2.svg'
import VehicleIcon3 from '../../assets/Resources/vehicle3.svg'
import VehicleIcon4 from '../../assets/Resources/vehicle4.svg'
import VehicleIcon5 from '../../assets/Resources/vehicle5.svg'
import VehicleIcon6 from '../../assets/Resources/vehicle6.svg'
import VehicleIcon7 from '../../assets/Resources/vehicle7.svg'
import VehicleIcon8 from '../../assets/Resources/vehicle8.svg'
import VehicleIcon9 from '../../assets/Resources/vehicle9.svg'
import VehicleIcon10 from '../../assets/Resources/vehicle10.svg'
import Ellipse1 from '../../assets/Resources/ellipse-1.png'
import Ellipse2 from '../../assets/Resources/ellipse-2.png'
import { IoIosArrowForward } from "react-icons/io";
import { TbFileDownload } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import ProductImage from '../../assets/Resources/oil-product-1.png'
import whyUsImg from '../../assets/Resources/counter-image.jpg'
import TestiImg1 from '../../assets/Resources/test-img-1.jpg'
import TestiImg2 from '../../assets/Resources/test-img-2.jpg'
import TestiProfile from '../../assets/Resources/test-profile.jpg'
import Brand1 from '../../assets/Resources/brand1.png'
import Brand2 from '../../assets/Resources/brand2.png'
import Brand3 from '../../assets/Resources/brand3.png'
import Brand4 from '../../assets/Resources/brand4.png'
import CtaRight from '../../assets/Resources/cta-right.png'
import CtaLeft from '../../assets/Resources/cta-left.png'

const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const brandsettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10px",
    };

    return (
        <>
            {/* banner section */}
            <div className="banner-section">
                <Slider {...settings} className='slider'>
                    <div className='banner-1'>
                        <div className="container">
                            <div className="banner-contents">
                                <h5>UNLOCK THE WORLD OF</h5>
                                <h1>Lubricants & <span className='ban-outline'>Additives</span></h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                <div className="common-btn banner-btn">
                                    <button className='fontSize16 fontWeight300'>Explore Products<GoArrowUpRight className='icon' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='banner-1'>
                        <div className="container">
                            <div className="banner-contents">
                                <h5>UNLOCK THE WORLD OF</h5>
                                <h1>Lubricants & <span className='ban-outline'>Additives</span></h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                <div className="common-btn banner-btn">
                                    <button className='fontSize16 fontWeight300'>Explore Products<GoArrowUpRight className='icon' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className="container select-vehicle-container">
                    <div className="select-vehicle">
                        <div className="sub-heading-dark">
                            <button>SELECT YOUR VEHICLE</button>
                        </div>
                        <div className="vehicle-category">
                            <div className="item active">
                                <div className="icon">
                                    <img src={VehicleIcon1} alt="" />
                                    <p>Cars</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <img src={VehicleIcon2} alt="" />
                                    <p>Motorcycle</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <img src={VehicleIcon3} alt="" />
                                    <p>Classic</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <img src={VehicleIcon4} alt="" />
                                    <p>Off-road</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <img src={VehicleIcon5} alt="" />
                                    <p>Tuning</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <img src={VehicleIcon6} alt="" />
                                    <p>Motorsport</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <img src={VehicleIcon7} alt="" />
                                    <p>Truck</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <img src={VehicleIcon8} alt="" />
                                    <p>Boat</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <img src={VehicleIcon9} alt="" />
                                    <p>Ship</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <img src={VehicleIcon10} alt="" />
                                    <p>Aviation</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* about section */}
            <div className="about-section space">
                <div className="container">
                    <div className="title-content">
                        <div className="sub-heading-dark">
                            <button>ABOUT US</button>
                        </div>
                        <div className="title">
                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                        </div>
                        <div className="right">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            <div className="common-btn">
                                <button>Know more</button>
                            </div>
                        </div>
                    </div>


                    <div className="counter-section">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="box box-1">
                                    <div className="years-in-industry">
                                        <span>Over</span>
                                        <h1>30+</h1>
                                    </div>
                                    <h6>Years in Industry</h6>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box box-2">
                                    <h1>#1</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box box-3">
                                    <h6>Active across</h6>
                                    <div className="years-in-industry">
                                        <h1>7+</h1>
                                        <span>Countries Globally</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box box-4">
                                    <div className="icon">
                                        <GoArrowUpRight />
                                    </div>
                                    <h6><span>4+</span> Categories</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shapes">
                    <div className="shape1">
                        <img src={Ellipse1} alt="" />
                    </div>
                    <div className="shape2">
                        <img src={Ellipse2} alt="" />
                    </div>
                </div>
            </div>

            {/* product section */}
            <div className="product-section smoke-bg space">
                <div className="container">
                    <div className="title-content title-content-all">
                        <div className="sub-heading-dark">
                            <button>EXPLORE OUR PRODUCTS</button>
                        </div>
                        <div className="title">
                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                        </div>
                    </div>
                    <div className="product-showcase">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="product-menu">
                                    <ul>
                                        <li>
                                            <NavLink className="activeTab">Automotive Oils</NavLink>
                                            <IoIosArrowForward className="activeTab" />
                                        </li>
                                        <li>
                                            <NavLink>Classic Oils</NavLink>
                                            <IoIosArrowDown />
                                        </li>
                                        <li>
                                            <NavLink>Industrial Oils</NavLink>
                                            <IoIosArrowDown />
                                        </li>
                                        <li>
                                            <NavLink>Hig-tech Additives</NavLink>
                                            <IoIosArrowDown />
                                        </li>
                                        <li>
                                            <NavLink>Aviation</NavLink>
                                            <IoIosArrowDown />
                                        </li>
                                        <li>
                                            <NavLink>Tank Restoration</NavLink>
                                            <IoIosArrowDown />
                                        </li>
                                        <li>
                                            <NavLink>Technical Sprays</NavLink>
                                            <IoIosArrowDown />
                                        </li>
                                        <li>
                                            <NavLink>Greases & Pastes</NavLink>
                                            <IoIosArrowDown />
                                        </li>
                                        <li>
                                            <NavLink>Specials</NavLink>
                                            <IoIosArrowDown />
                                        </li>
                                        <li>
                                            <NavLink>Cleaning & Care</NavLink>
                                            <IoIosArrowDown />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="products">
                                    <div className="header">
                                        <div className="catalogue">
                                            <h6>Download Catalogue<TbFileDownload className='icon' /></h6>
                                        </div>
                                        <div className="navigate">
                                            <h6>View our Best seller<GoArrowUpRight className='icon' /></h6>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={ProductImage} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>Wagner VG 150 Industrial Oil</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={ProductImage} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>Wagner VG 150 Industrial Oil</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={ProductImage} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>Wagner VG 150 Industrial Oil</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={ProductImage} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>Wagner VG 150 Industrial Oil</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={ProductImage} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>Wagner VG 150 Industrial Oil</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={ProductImage} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>Wagner VG 150 Industrial Oil</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={ProductImage} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>Wagner VG 150 Industrial Oil</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={ProductImage} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>Wagner VG 150 Industrial Oil</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
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

            {/* why us section */}
            <div className="why-us space">
                <div className="container">
                    <div className="title-content title-content-all title-dark text-center">
                        <div className="sub-heading-dark">
                            <button>WHY US</button>
                        </div>
                        <div className="title">
                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="why-us-content">
                            <div className="box active">
                                <div className="image">
                                    <img src={whyUsImg} alt="" />
                                </div>
                                <div className="content">
                                    <h5>Made in Germany</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className="box ">
                                <div className="image">
                                    <img src={whyUsImg} alt="" />
                                </div>
                                <div className="content">
                                    <h5>Made in Germany</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className="box ">
                                <div className="image">
                                    <img src={whyUsImg} alt="" />
                                </div>
                                <div className="content">
                                    <h5>Made in Germany</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className="box ">
                                <div className="image">
                                    <img src={whyUsImg} alt="" />
                                </div>
                                <div className="content">
                                    <h5>Made in Germany</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className="box ">
                                <div className="image">
                                    <img src={whyUsImg} alt="" />
                                </div>
                                <div className="content">
                                    <h5>Made in Germany</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* testimonial-section */}
            <div className="testimonial-section space">
                <div className="container">
                    <div className="main-title">
                        <div className="title-content title-content-all left-title">
                            <div className="sub-heading-dark">
                                <button>TESTIMONIALS</button>
                            </div>
                            <div className="title">
                                <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                            </div>
                        </div>
                        <div className="title-btn">
                            <div className="test-btn">
                                <button>More About us</button>
                            </div>
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

            {/* our brands */}

            <div className="our-brands space">
                <div className="container">
                    <div className="title-content title-content-all text-center">
                        <div className="sub-heading-dark">
                            <button>OUR BRANDS</button>
                        </div>
                        <div className="title">
                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                        </div>
                    </div>

                    <div className="brands-slider">
                        <Slider {...brandsettings} className='slider'>
                            <div className="item">
                                <div className="logo">
                                    <img src={Brand1} alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src={Brand2} alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src={Brand3} alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src={Brand4} alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src={Brand1} alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src={Brand2} alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src={Brand3} alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src={Brand4} alt="" />
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
                <div className="shapes">
                    <div className="shape1">
                        <img src={Ellipse1} alt="" />
                    </div>
                    <div className="shape2">
                        <img src={Ellipse2} alt="" />
                    </div>
                </div>
            </div>


            {/* cta section */}
            <div className="cta-section mini-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="image image-left">
                                <img src={CtaLeft} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="content">
                                <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                            </div>
                            <div className="mini-content">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <div className="cta-btn">
                                    <button>Let's Connect</button>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="image">
                                <img src={CtaRight} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home