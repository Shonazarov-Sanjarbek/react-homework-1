import React from "react";
import "./Services.css"
import img1 from "../../assets/img/services-card1.svg"
import img2 from "../../assets/img/services-card2.svg"
import img3 from "../../assets/img/services-card3.svg"


function Services(){
    return(
        <div className="container">
            <div className="services">
                <div className="services__block">
                    <p className="services__subtitle">
                        WHAT WE DO
                    </p>
                    <p className="services__title">
                        Our Service
                    </p>
                </div>
                <div className="services__wrapper">
                    <div className="services__card">
                        <div className="services__img">
                            <img src={img1} alt="" className="services__img" />                       
                        </div>
                        <div className="services__desc">
                            <p className="services__text">
                                Interior Design
                            </p>
                            <p className="services__comment">
                            Lorem ipsum dolor amet consectetur
                            adipiscing elit sed eiusmod tempor
                            incididunt ut labore.
                            </p>
                        </div>
                    </div>
                    <div className="services__card">
                        <div className="services__img">
                            <img src={img2} alt="" className="services__img" />                       
                        </div>
                        <div className="services__desc">
                            <p className="services__text">
                                Architecture
                            </p>
                            <p className="services__comment">
                            Lorem ipsum dolor amet consectetur
                            adipiscing elit sed eiusmod tempor
                            incididunt ut labore.
                            </p>
                        </div>
                    </div>
                    <div className="services__card">
                        <div className="services__img">
                            <img src={img3} alt="" className="services__img" />                       
                        </div>
                        <div className="services__desc">
                            <p className="services__text">
                                Planning
                            </p>
                            <p className="services__comment">
                            Lorem ipsum dolor amet consectetur
                            adipiscing elit sed eiusmod tempor
                            incididunt ut labore.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services