import React from 'react';
import Title from '../Title/index';
import Subtitle from '../Subtitle/index';
import Button from '../Button/index';

import CardFood1 from '../../assets/comida_1.svg';
import CardFood2 from '../../assets/comida_2.svg';
import CardFood3 from '../../assets/comida_3.svg';
import CardFood4 from '../../assets/comida_4.svg';

const MainCardFood = () => {
    return(
        <div className="section">
            <Title title="Our Best Recipes"/>
            <Subtitle
             subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            />

            <div className="section__wrapper">
                <div className="section__wrapper__card">
                    <img className="section__wrapper__card__img" src={CardFood1} />
                    <div className="section__wrapper__card__left">
                        <div className="section__wrapper__card__left__description">
                            Broccoli Salad with Bacon
                        </div>
                        <Button text="See Recipe"/>
                    </div>
                </div>
                <div className="section__wrapper__card">
                    <img className="section__wrapper__card__img" src={CardFood2} />
                    <div className="section__wrapper__card__left">
                        <div className="section__wrapper__card__left__description">
                            Classic Beef Burgers
                        </div>
                        <Button text="See Recipe"/>
                    </div>
                </div>
                <div className="section__wrapper__card">
                    <img className="section__wrapper__card__img" src={CardFood3} />
                    <div className="section__wrapper__card__left">
                        <div className="section__wrapper__card__left__description">
                            Classic Potato Salad
                        </div>
                        <Button text="See Recipe"/>
                    </div>
                </div>
                <div className="section__wrapper__card">
                    <img className="section__wrapper__card__img" src={CardFood4} />
                    <div className="section__wrapper__card__left">
                        <div className="section__wrapper__card__left__description">
                            Cherry Cobbler on the Grill
                        </div>
                        <Button text="See Recipe"/>
                    </div>
                </div>
               
            </div>

        </div>

    );
}

export default MainCardFood;