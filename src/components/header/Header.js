import React from "react";
import "./Header.css"
import logo from "../../assets/img/logo.png"


function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__block">
                    <div className="header__logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="header__desc">
                        <ul className="header__collection">
                            <li className="header__item">
                                <a href="#">
                                    <span>
                                        Home
                                    </span>
                                </a>
                            </li>
                            <li className="header__item">
                                <a href="#">
                                    <span>
                                        Project
                                    </span>
                                </a>
                            </li>
                            <li className="header__item">
                                <a href="#">
                                    <span>
                                        Services
                                    </span>
                                </a>
                            </li>
                            <li className="header__item">
                                <a href="#">
                                    <span>
                                        About
                                    </span>
                                </a>
                            </li>
                            <li className="header__item">
                                <a href="#">
                                    <span>
                                        Blog
                                    </span>
                                </a>
                            </li>
                            <li className="header__item">
                                <a href="#">
                                    <span>
                                        Shop
                                    </span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="#">
                                    <span>
                                        Contact
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <button className="header__btn">
                            <span>
                                Sign Up
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header