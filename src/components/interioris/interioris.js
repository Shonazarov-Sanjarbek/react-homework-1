import React from "react"
import "./interioris.css"
import img from "../../assets/img/interioris.png"



function Interioris() {
    return(
        <div className="container">
            <div className="interioris">
                <div className="interioris__img">
                    <img src={img} alt="" />
                </div>
                <div className="interioris__content">
                    <p className="interioris__subtitle">
                        ABOUT US
                    </p>
                    <p className="interioris__title">
                        Interioris The Will
                        of An Epoch Mextreo
                    </p>
                    <p className="interioris__text">
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form injected
                    humour, or randomised words which don't look even slightly
                    believable.If you are going to use a passage of Lorem Ipsum,
                    sure there isn't anything embarrassing hidden the middleof text.
                    All the Lorem Ipsum generators on the Internettend to repeat
                    predefined chunks as necessary,making this the first true
                    generator on the Internet.                  
                    </p>
                    <div className="interioris__btn">
                    <button>
                        <span>
                            LEARN MORE
                        </span>
                    </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interioris