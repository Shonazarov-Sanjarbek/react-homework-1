import React from "react"
import "./Hero.css"
import hero from "../../assets/img/hero.png"

function Hero() {
    return(
        <div className="container">
            <div className="hero">
                <div className="hero__content">
                    <p className="hero__subtitle">
                        MODERN INTERIOR
                    </p>
                    <p className="hero__title">
                        Create Your
                        Interior Design.
                    </p>
                    <p className="hero__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation.
                    </p>
                    <div className="hero__btn">
                    <button>
                        <span>
                            Contact
                        </span>
                    </button>

                    </div>
                </div>
                <div className="hero__img">
                    <img src={hero} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero