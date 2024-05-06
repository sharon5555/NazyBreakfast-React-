import React from 'react'
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
    <div className="home-container">
        <Navbar/>
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
                <h1 className='primary-heading'>
                    Your BreakFast Delivered Hot & Fresh.
                </h1>
                <p className='primary-text'>
                    Healthy swap-out chefs do all the prep stuff, like cutting up ingredients and adding flavor, so you just have to cook the food fresh.
                </p>
                <button className='secondary-button'>
                    Order Now <FiArrowRight />{" "}
                </button>
            </div>
            <div className='home-image-section'>
                <img src={BannerImage} alt="" />
            </div>
        </div>
    </div>
    );
};

export default Home;