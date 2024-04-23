import React from 'react';
import './Carousel.css';

const Carousel = () => {
    return (
        <div>
          <div className="container">
    <div className="slide">
        <div className="item">
            <div className="content">
                <p id="line1">Robotics And Mechatronics Engineering</p>
                <p id="line2">Aumni Portal</p>
                <p id="line3">Welcome to the RME Alumni Community</p>
                <button>Sign Up/Sign In</button>
            </div>
        </div>
        <div className="item" >
            <div className="content">
                <p id="line1">Robotics And Mechatronics Engineering</p>
                <p id="line1">Aumni Portal</p>
                <p id="line3">Welcome to the RME Alumni Community</p>
                <button>Sign Up/Sign In</button>
            </div>
        </div>
        <div className="item" >
            <div className="content">
                <p id="line1">Robotics And Mechatronics Engineering</p>
                <p id="line2">Aumni Portal</p>
                <p id="line3">Welcome to the RME Alumni Community</p>
                <button>Sign Up/Sign In</button>
            </div>
        </div>
        <div className="item" >
            <div className="content">
                <p id="line1">Robotics And Mechatronics Engineering</p>
                <p id="line2">Aumni Portal</p>
                <p id="line3">Welcome to the RME Alumni Community</p>
                <button>Sign Up/Sign In</button>
            </div>
        </div>
    </div>
    <div className="button">
        <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
        <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
    </div>

            </div>
                  </div>
                
    );
};

export default Carousel;