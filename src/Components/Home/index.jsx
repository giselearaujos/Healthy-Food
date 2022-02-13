import React from "react";
import ImageHome from "../../assets/Illustration.svg";

const Home = () => {
    return (
        <div className="home__container">            
            <div className="home__container__wrapper">
                <h1 className="home__container__wrapper__title">Ready for </h1>
                <h1 className="home__container__wrapper__title">Trying a new</h1>
                <h1 className="home__container__wrapper__title">recipe?</h1>
                <div className="home__container__wrapper__InputBtn">
                    <input className="home__container__wrapper__InputBtn__input" type="text" placeholder="Search healthy recipes"/>
                    <button className="home__container__wrapper__InputBtn__btn"></button>
                </div>
            </div>
            
            <img className="home__container__wrapper__img"src={ImageHome} alt="#" />
        </div>
    )
}

export default Home;