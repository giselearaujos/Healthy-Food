import React from "react";
import BlogImage from "../../assets/bloco_services.svg";
import Button from "../Button/index";

const MainServices = () => {
    return (
        <section className="service">
            <img className="service__img" src={BlogImage} alt="#" />
            <div className="service__text">
                <h1 className="service__text__title">The best services ready</h1>
                <h1 className="service__text__title">To serve you</h1>                                  
                <h3 className="service__text__subtitle">
                    Far far away, behind the word mountains, far from
                    the countries Vokalia and Consonantia, there live the
                    blind texts.
                </h3>
                <h3 className="service__text__subtitle">
                    Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                </h3>
                <h3 className="service__text__subtitle">
                    A small river named Duden flows by their place and
                    supplies it with the necessary regelialia.
                </h3>                               
                <Button text="Know More"/>
            </div>
        </section>
    );
}

export default MainServices;