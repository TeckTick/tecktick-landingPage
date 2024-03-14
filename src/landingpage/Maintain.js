import React from "react";
import logo  from "../assets/Logo.svg"
import maintainimg from "../assets/WhatsApp Image 2024-03-13 at 1.49.12 PM.jpeg"
import Timer from "../components/Timer";
import {SocialIcon} from "react-social-icons"


const Maintain = () => {
    return(
        <div className="maintain">
            <div className="nav">
                <img src={logo} alt="logo" />
                <button class=" bg-[#4B6EE5] px-4 py-2 rounded-[15.78px] text-black">Contact</button>
            </div>
            <div className="maintain-landing">
                <div className="image">
                    <img src={maintainimg} alt="maintainimg" />
                </div>
                <div className="text">
                    <h1>We're Coming Soon</h1>
                    <p>Our Portal is currently under construction. We'll be here soon with<br/>our new awesome site. Subscribe to be notified</p>
                    <Timer duration={5 * 24 * 60 * 60 * 1000}/>
                    <p>Days     Hours     Minutes       Seconds</p>
                    <input type="email" placeholder="Enter Your Email Address" />
                </div>
            </div>
            <div className="flex justify-between Mfooter">
                <p>&copy; TeckTick 2024</p>
                <div>
                    <SocialIcon url="www.twitter.com" />
                    <SocialIcon url="www.linkedin.com" />
                    <SocialIcon url="www.google.com" />
                    <SocialIcon url="www.github.com" />
                
                </div>
                

            </div>
        </div>
    )
}

export default Maintain


