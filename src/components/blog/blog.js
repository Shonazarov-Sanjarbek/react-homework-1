import React from "react";
import "./blog.css"


function Blog() {
    return(
        <div className="container">
            <div className="blog">
                <div className="blog__block">
                    <p className="blog__subtitle">
                        TESTIMONIALS
                    </p>
                    <p className="blog__title">
                        Client says about us
                    </p>
                </div>
                <div className="blog__wrapper">
                    <div className="blog__card">
                            <p className="blog__text">
                                Louis Saville
                            </p>
                            <p className="blog__comment">
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                            </p> 
                    </div>
                    <div className="blog__card">
                            <p className="blog__text">
                                Rekha Varadwaz
                            </p>
                            <p className="blog__comment">
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                            </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog