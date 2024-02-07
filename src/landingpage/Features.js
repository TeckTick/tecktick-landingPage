<<<<<<< HEAD
import React from 'react'
=======
import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const FeatureTab = ({ tab, isActive, onClick }) => (
  <button
    className={`text-lg font-medium ${
      isActive
        ? "text-gray-100 border-b-2 border-gray-100"
        : "text-white hover:text-pink-100"
    }`}
    onClick={() => onClick(tab.name)}
  >
    {tab.label}
    {isActive && <HiChevronDown className="inline ml-1" />}
  </button>
);

const FeatureContent = ({ tab, children }) => (
  <div className="flex flex-col lg:flex-row mx-2 space-x-4 lg:space-x-8 items-center lg:items-start mt-4">
    <img
      src={`https://source.unsplash.com/random/300x300?${tab.name}`}
      alt={tab.name}
      className="w-96 h-54 rounded-lg mb-4"
    />
    <div className="text-lg font-medium space-y-4">
      <h3 className="text-2xl font-bold">{tab.label}</h3>
      <p>{children}</p>
      <button   style={{
          marginBottom: '1rem',
          backgroundColor: 'transparent',
          border: '2px solid black',
          color: 'black',
          padding: '0.5rem 1rem',
          borderRadius: '50px'
        }}
        className="mb-10">Learn More</button>
    </div>
  </div>
);
>>>>>>> da801abae87bdf3be29201254d983c118eb3ecdc

const Features = () => {
  return (
<<<<<<< HEAD
    <div>Features</div>
  )
}
=======
    <div style={{ backgroundColor: 'rgba(47, 0, 122, 1)' }} className="w-full mt-8 py-16">
      <h2 className="text-4xl mt-4font-bold text-white text-center mb-12">Features</h2>
      <div className="flex justify-center">
        <nav className="flex flex-wrap items-center justify-center space-x-4">
          {tabs.map((tab) => (
            <FeatureTab
              key={tab.name}
              tab={tab}
              isActive={activeTab === tab.name}
              onClick={handleTabClick}
            />
          ))}
        </nav>
      </div>
      <div style={{ backgroundColor: 'rgba(236, 228, 255, 1)' }} className="flex flex-col lg:flex-row mx-10 mb-2 items-center justify-center mt-8">
        {tabs.map((tab) => (
          activeTab === tab.name && (
            <FeatureContent key={tab.name} tab={tab}>
              {/* Customize content for each tab */}
              Explanation of why you are going to love it and the benefit!
            </FeatureContent>
          )
        ))}
      </div>
    </div>
  );
};
>>>>>>> da801abae87bdf3be29201254d983c118eb3ecdc

export default Features