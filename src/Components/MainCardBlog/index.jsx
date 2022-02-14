import React from 'react';
import Title from '../Title/index';
import Subtitle from '../Subtitle/index';
import Button from '../Button/index';
import BlogImage01 from '../../assets/blog_image_1.svg';
import BlogImage02 from '../../assets/bloco_image_2.svg';
import BlogImage03 from '../../assets/bloco_image_3.svg';

const MainCardBlog = () => {
    return (
        <div className="container-blog">
            <Title title="Read Our Blog"/>
            <Subtitle
             subtitle="Far far away, behind the word mountains, far from the countries
             Vokalia and Consonantia, there live the blind texts."
            />
            <div className="container-blog__card">
                <div className="container-blog__card__main">
                    <img  className="container-blog__card__main__img" src={BlogImage01} alt="#" />
                    <div className="container-blog__card__main__bottom">
                        <h1 className="container-blog__card__main__bottom__h1">
                            Quick-start guide to nuts and seeds <br />
                        </h1>
                        <div className="container-blog__card__main__bottom__person">
                            <span className="container-blog__card__main__bottom__person__circle"></span>
                            <h3 className="container-blog__card__main__bottom__person__name">Kevin Ibrahim</h3>
                        </div>
                    </div>
                </div>  
                <div className="container-blog__card__main">
                    <img  className="container-blog__card__main__img" src={BlogImage02} alt="#" />
                    <div className="container-blog__card__main__bottom">
                        <h1 className="container-blog__card__main__bottom__h1">
                            Nutrition: Tips for Improving Your Health
                        </h1>
                        <div className="container-blog__card__main__bottom__person">
                            <span className="container-blog__card__main__bottom__person__circle"></span>
                            <h3 className="container-blog__card__main__bottom__person__name">Mike Jackson</h3>
                        </div>
                    </div>
                </div>
                <div className="container-blog__card__main">
                    <img  className="container-blog__card__main__img" src={BlogImage03} alt="#" />
                    <div className="container-blog__card__main__bottom">
                        <h1 className="container-blog__card__main__bottom__h1">
                            The top 10 benefits of eating healthy
                        </h1>
                        <div className="container-blog__card__main__bottom__person">
                            <span className="container-blog__card__main__bottom__person__circle"></span>
                            <h3 className="container-blog__card__main__bottom__person__name">Bryan McGregor</h3>
                        </div>
                    </div>
                </div>              
             </div>
        </div>

        

    );
}

export default MainCardBlog;