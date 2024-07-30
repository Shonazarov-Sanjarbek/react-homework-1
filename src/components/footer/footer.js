import React from "react";
import "./footer.css"


function Footer(){
    return(
        <div className="container">
            <div className="footer">
                <p className="footer__subtitle">
                    DON'T FORGET TO SIGN UP
                </p>
                <p className="footer__comment">
                    Find out early about all upcoming promotions and new product releases with
                    our newsletter.
                </p>
                <form action="" className="footer__form">
                    <input className="footer__inp" type="text" name="" id="" placeholder="Enter your email address....." />
                    <div className="footer__btn">
                    <button type="button">
                        <span>
                            Contact
                        </span>
                    </button>

                    </div>
                </form>
            </div>
        </div>
    )
}


export default Footer