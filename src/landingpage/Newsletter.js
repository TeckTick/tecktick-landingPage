// src/components/Newsletter.js
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const subscribeHandler = () => {
    console.log(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <div className="bg-gray-200 p-4 sm:p-8 rounded-md" style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
      <h2 className="text-center text-2xl font-bold mb-4 text-[rgba(74, 74, 104, 1)]">Get Our Weekly Newsletter</h2>
      <p className="mx-auto text-center text-gray-600 sm:w-96 mb-4">
        Explanation of why you are going to love it and the benefit!
      </p>
      <div className="flex flex-col sm:flex-row">
        <input
          type="email"
          placeholder="Your email"
          className="flex-1 p-2 border rounded-l-md mb-2 sm:mb-0 sm:mr-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          style={{ backgroundColor: 'rgba(69, 0, 153, 1)' }}
          className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-r-md"
          onClick={subscribeHandler}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
