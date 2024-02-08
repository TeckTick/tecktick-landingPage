import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const FeatureTab = ({ tab, isActive, onClick }) => (
  <button
    className={`text-lg font-medium ${
      isActive
        ? "text-gray-100 border-b-2 border-gray-100"
        : "text-white hover:text-gray-100"
    }`}
    onClick={() => onClick(tab.name)}
  >
    {tab.label}
    {isActive && <HiChevronDown className="inline ml-1" />}
  </button>
);

const FeatureContent = ({ tab, children }) => (
  <div className="flex flex-col lg:flex-row mx-4 space-x-8 lg:space-x-12 items-center lg:items-start mt-4">
    <img
      src={`https://source.unsplash.com/random/300x300?${tab.name}`}
      alt={tab.name}
      className="w-74 h-54 rounded-lg object-cover mb-4"
    />
    <div className="text-lg font-medium space-y-4">
      <h3 className="text-2xl font-bold">{tab.label}</h3>
      <p>{children}</p>
      <button style={{ marginBottom: '1rem' }} className="bg-blue-300 text-white px-4 py-2 rounded-md mb-10">Learn More</button>
    </div>
  </div>
);

const Features = () => {
  const [activeTab, setActiveTab] = useState("community");

  const tabs = [
    { name: "community", label: "Community" },
    { name: "events", label: "Events" },
    { name: "hackathons", label: "Hackathons" },
    { name: "merchandise", label: "Merchandise" },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div style={{ backgroundColor: 'rgba(47, 0, 122, 1)' }} className="w-full py-16">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Features</h2>
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
      <div style={{ backgroundColor: 'rgba(236, 228, 255, 1)' }} className="flex flex-col lg:flex-row mx-20 mb-10 items-center justify-center mt-12">
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

export default Features;