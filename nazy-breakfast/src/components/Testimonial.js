import React from "react";
import ProfilePic from "../Assets/chef-image-2.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
return (
    <div className="work-section-wrapper">
    <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
            Everyone loves Nazy Breakfast's tasty and convenient morning meals!
        </p>
    </div>
    <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
            I loved my breakfast at Nazy Breakfast! The food smelled amazing when I walked in. There were so many yummy choices on the menu. When my food came, it was even better than I hoped! The pancakes were fluffy, the eggs were just right, and the coffee was perfect. The people working there were really nice, too. I left feeling happy and full. Can't wait to go back!!
        </p>
        <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
        </div>
        <h2>Nazy</h2>
    </div>
    </div>
);
};

export default Testimonial;