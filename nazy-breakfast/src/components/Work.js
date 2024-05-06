import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
        image: PickMeals,
        title: "Pick Meals",
        text: " Choose your favorite breakfast from our menu, decide how often you want it, and we'll deliver it to you. Easy, tasty, and convenient!",
        },
        {
        image: ChooseMeals,
        title: "Choose How Often",
        text: "Decide how frequently you want your breakfast delivered—whether it's every day, once a week, or just once a month. You're in control!",
        },
        {
        image: DeliveryMeals,
        title: "Fast Deliveries",
        text: "Get your breakfast quickly! We make sure your meal reaches you as soon as possible, so you can enjoy it fresh and hot.",
        },
    ];
    return (
        <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How It Works</h1>
            <p className="primary-text">
            At Nazy Breakfast, getting your morning meal is as easy as 1-2-3. First, choose your favorite breakfast option from our menu, Secondly, place your order. Finally, sit back and relax while we prepare and deliver your delicious breakfast right to your doorstep.
            </p>
        </div>
        <div className="work-section-bottom">
            {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
                <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
            </div>
            ))}
        </div>
        </div>
    );
    };
    
    export default Work;
