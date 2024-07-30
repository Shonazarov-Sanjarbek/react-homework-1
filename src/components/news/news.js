import React from "react";
import "./news.css"
import card1 from "../../assets/img/news-card1.png"
import card2 from "../../assets/img/news-card2.png"



function News() {
    return(
        <div className="news">
            <div className="container">
                <div className="news__block">
                    <div className="news__content">
                    <p className="news__subtitle">
                        LETEST NEWS
                    </p>
                    <p className="news__title">
                        From Our Blog
                    </p>
                    </div>
                    <div className="news__wrapper">
                        <div className="news__card">
                            <div className="news__card__img">
                                <img src={card1} alt="" />
                            </div>
                            <div className="news__card__content">
                                <p className="news__desc">
                                    2020 Interior Design Trends
                                </p>
                                <p className="news__comment">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua.
                                </p> 
                                <div className="news__btn">
                                    <button>
                                        <span>
                                            CONTINUE READING....
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="news__card">
                            <div className="news__card__img">
                                <img src={card2} alt="" />
                            </div>
                            <div className="news__card__content">
                                <p className="news__desc">
                                    28 Notable Product at ARC Interior Design
                                </p>
                                <p className="news__comment">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua.
                                </p> 
                                <div className="news__btn">
                                    <button>
                                        <span>
                                            CONTINUE READING....
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News