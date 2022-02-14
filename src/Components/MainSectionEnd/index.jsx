import React from 'react';
import ImageEnd from "../../assets/bloco_final_image.svg";

const MainSectionEnd = () => {
    return (
        <>
        <div className="sectionEnd">
            <div className="sectionEnd__container">
                <h1 className="sectionEnd__container__title">
                    Join our membership
                </h1>
                <h1 className="sectionEnd__container__title">
                    to get special offer
                </h1>
                <div className="sectionEnd__container__InputBtn">
                    <input className= "sectionEnd__container__InputBtn__input" type="text" placeholder="Enter your email address"/>
                    <button className= "sectionEnd__container__InputBtn__btn">Join</button>
                </div>
            </div>
            <img className="sectionEnd__img" src={ImageEnd} />
        </div>
        <footer className="sectionEnd__footer">
            <h3 className="sectionEnd__footer__h3">© Copyrights 2019 Stack. All Rights Reserved.</h3>
            <h3 className="sectionEnd__footer__h3">Privacy Policy Terms and Conditions</h3>
        </footer>
        </>
    );
}

export default MainSectionEnd;