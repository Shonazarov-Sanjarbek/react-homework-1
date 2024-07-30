import React from "react"
import "./market.css"
import number from "../../assets/img/market-number.png"
import img from "../../assets/img/market-img.png"

function Market(){
    return(
        <div className="container">
            <div className="market">
                <div className="market__content">
                    <img src={number} alt="" />
                    <p className="market__desc">
                    Years Of Successful
                    Working 
                    The Market
                    </p>
                    <div className="market__btn">
                    <button>
                        <span>
                            Contact
                        </span>
                    </button>

                    </div>
                </div>
                <div className="market__img">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Market