import React, { useRef, useEffect, useState } from 'react';
// import logo from '../assets/images/Logo.svg';
import maintainimg from '../assets/images/comingsoon.png';
import { SocialIcon } from 'react-social-icons';
import sendButton from '../assets/images/sendButton.png';

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
    <div className="container mx-auto px-4 py-6 mt-4 md:py-12 lg:py-16 xl:py-20 bg-[#FFFFFF]">
      <div className="nav flex justify-between items-center py-4">
        {/* <img src={logo} alt="logo" className='text-[#4B6EE5]' /> */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Contact</button>
      </div> 

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:ml-10 pr-4 md:pr-20 w-full md:w-[615px] h-[424px]">
          <img src={maintainimg} alt="maintainimg" className="w-full h-auto" />
        </div>
        <div className="text-center md:text-start w-full md:w-[556px] h-auto md:h-[317px]">
          <div className='mb-4'>
            <h1 className="font-normal text-4xl text-[#0f70eb]">We're Coming Soon</h1>
            <p className="font-normal text-base text-[#77838f]">
              Our Portal is currently under construction. We'll be here soon with
              our new awesome site. Subscribe to be notified
            </p>
          </div>
          <div className="flex justify-center md:justify-start items-center flex-wrap mb-4">
            <div className="mr-4 md:mr-6">
              <p className='font-normal text-3xl text-[#1E2022]'>{timerDays}</p>
              <p className='font-normal text-base text-[#77838F]'><small>Days</small></p>
            </div>
            <div className="mr-4 md:mr-6">
              <p className='font-normal text-3xl text-[#1E2022]'>{timerHours}</p>
              <p className='font-normal text-base text-[#77838F]'><small>Hours</small></p>
            </div>
            <div className="mr-4 md:mr-6">
              <p className='font-normal text-3xl text-[#1E2022]'>{timerMinutes}</p>
              <p className='font-normal text-base text-[#77838F]'><small>Minutes</small></p>
            </div>
            <div>
              <p className='font-normal text-3xl text-[#1E2022]'>{timerSeconds}</p>
              <p className='font-normal text-base text-[#77838F]'><small>Seconds</small></p>
            </div>
          </div>
          <div className='flex justify-center md:justify-start mb-4'>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border border-gray-300 rounded px-4 py-2 mb-4 md:mb-0 md:mr-4 w-full md:w-[555px]"
            />
            <button className='bg-[#743FE5] w-10 h-10'>
              <img src={sendButton} alt="send" className='w-6 h-6  text-white' />
            </button>
          </div>
          <div className="flex justify-between items-center md:py-4 md:top-[743px] md:left-16">
            <div className="social-media flex gap-2 mb-4 md:mb-0">
              <SocialIcon url="www.twitter.com" className='text-base font-normal' />
              <SocialIcon url="www.linkedin.com" className='text-base font-normal' />
              <SocialIcon url="www.google.com" className='text-base font-normal' />
              <SocialIcon url="www.github.com" className='text-base font-normal' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
