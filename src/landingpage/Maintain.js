import React, { useRef, useEffect, useState } from "react";
import logo  from "../assets/Logo.svg"
import maintainimg from "../assets/WhatsApp Image 2024-03-13 at 1.49.12 PM.jpeg"
import {SocialIcon} from "react-social-icons"



const Maintain = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('May 30 2024 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);


            if (distance < 0){
                // stop our time
                clearInterval(interval.current)
            }else{
                // update our time
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }


        }, 1000);
    };

    useEffect(() => {
        startTimer();


        return() => {
            clearInterval(interval.current)
        };

    })

    return(
        <div className="maintain ">
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
                    <p>Our Portal is currently under construction. We'll be here on May 30 2024 with<br/>our new awesome site. Subscribe to be notified</p>
                    <div>
                        <section>
                            <p>{timerDays}</p>
                            <p><small>Days</small></p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerHours}</p>
                            <p><small>Hours</small></p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerMinutes}</p>
                            <p><small>Minutes</small></p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerSeconds}</p>
                            <p><small>Seconds</small></p>
                        </section>
                    </div>
                    <input type="email" placeholder="Enter Your Email Address" />
                </div>
            </div>
            <div className="Mfooter">
                <p>&copy; TeckTick 2024</p>
                <div className="social-media">
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


