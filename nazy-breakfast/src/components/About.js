import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    return <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>
                About
            </p>
            <h1 className='primary heading'>
                Breakfast Is An Important Part Of A Balance Diet
            </h1>
            <p className='primary-text'>
                We believe in the power of a good breakfast for a healthy diet. At Nazy Breakfast, we're passionate about providing nutritious breakfast options that are not only delicious but also fuel your body for the day ahead. Morning meals matter to us because they set the tone for your entire day. Whether it's a hearty bowl of oatmeal or a protein-packed smoothie, we're here to make your mornings healthier and happier.
            </p>
            <p className='primary-text'>
                We understand the importance of breakfast in maintaining a balanced diet. That's why we're dedicated to offering a range of nutritious morning options that make every meal count.
            </p>
            <div className='about-button-container'>
                <button className='secondary-button'>Learn More</button>
                {/*<button className='watch-video-button'> <BsFillPlayCircleFill/> Watch Video</button>*/}
            </div>
        </div>
    </div>
};

export default About;