import React, { useRef, useEffect, useState } from 'react';
import logo from '../assets/images/Logo.svg';
import maintainimg from '../assets/images/comingsoon.png';
import { SocialIcon } from 'react-social-icons';
import sendButton from '../assets/images/sendButton.png'

const ComingSoon = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('May 30 2024 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our time
        clearInterval(interval.current);
      } else {
        // update our time
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="container mx-auto px-4 h-[800px] bg-[#FFFFFF]">
      <div className="nav flex justify-between items-center py-4">
        <img src={logo} alt="logo" className='text-[#4B6EE5]' />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Contact</button>
      </div>

      <div className="flex items-center">
        <div className="ml-10 pr-20 w-[615px] h-[424px] left-[99px] top-10">
          <img src={maintainimg} alt="maintainimg" className="" />
        </div>
        <div className="text-start w-[556px] h-[317px]">
          <div className='w-[556px] h-[112px] left-[770px]'>
            <h1 className="font-normal text-4xl text-[#0f70eb] mb-4">We're Coming Soon</h1>
            <p className="font-normal text-base text-[#77838f]">
              Our Portal is currently under construction. We'll be here soon with
              our new awesome site. Subscribe to be notified
            </p>
          </div>
          <div className="flex items-center w-[484px] h-[73px] top-[407px]">
            <section className="mr-2 w-[62px] h-[73px] top-[407px] left-[770px]">
              <p className='font-normal text-3xl text-[#1E2022]'>{timerDays}</p>
              <p className='font-normal text-base text-[#77838F]'>
                <small>Days</small>
              </p>
            </section>
           
            <section className="mr-2 w-[53px] h-[73px] top-[407px] left-[908px]">
              <p className='font-normal text-3xl text-[#1E2022]'>{timerHours}</p>
              <p className='font-normal text-base text-[#77838F]'>
                <small>Hours</small>
              </p>
            </section>
           
            <section className="mr-2 w-[53px] h-[73px] top-[407px] left-[1046px]">
              <p className='font-normal text-3xl text-[#1E2022]'>{timerMinutes}</p>
              <p className='font-normal text-base text-[#77838F]'>
                <small>Minutes</small>
              </p>
            </section>
           
            <section className='mr-2 w-[53px] h-[73px] top-[407px] left-[1184px]'>
              <p className='font-normal text-3xl text-[#1E2022]'>{timerSeconds}</p>
              <p className='font-normal text-base text-[#77838F]'>
                <small>Seconds</small>
              </p>
            </section>
          </div>
          <div className='flex'>
  <input
    type="email"
    placeholder="Enter Your Email Address"
    className="border border-gray-300 rounded px-4 py-2 mt-4 w-[555px]"
  />
  <button className='left-[565px] bg-[#743FE5] w-10 h-10 mt-4'>
    <img src={sendButton} className='font-normal text-xl text-[#FFFFFF]' />
  </button>
</div>

        </div>
      </div>

      <div className="Mfooter flex justify-between items-center py-4 w-[1262px] h-[19px] top-[743px] left-16">
        <p className='font-normal text-sm text-[#77838F]'>&copy; TeckTick 2024</p>
        <div className="social-media flex w-[104.06px] h-[16px] top-1 left-[1157.94px] gap-2">
          <SocialIcon url="www.twitter.com"  className=' text-base font-normal '/>
          <SocialIcon url="www.linkedin.com" className='text-base font-normal'/>
          <SocialIcon url="www.google.com" className='text-base font-normal'/>
          <SocialIcon url="www.github.com" className='text-base font-normal'/>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
