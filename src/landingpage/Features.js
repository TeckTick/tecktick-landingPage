import React, { useState } from "react";
import img from "../assets/WhatsApp Image 2024-01-29 at 18.40 1.jpg";

const Features = () => {
  const [activeTab, setActiveTab] = useState("community");

  const tabs = [
    { name: "community", label: "Community", src: img },
    { name: "events", label: "Events", src: img },
    { name: "hackathons", label: "Hackathons", src: img },
    { name: "merchandise", label: "Merchandise", src: img },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    const currentTab = tabs.find((tab) => tab.name === activeTab);
    if (!currentTab) return null;

    return (
      <div className="flex justify-center items-center absolute w-[1236px] h-[556px]  top-1/2 left-1/2 transform -translate-x-1/2  bg-[#ECE4FF] border-2 border-white rounded-[10px] shadow-lg">
        <div className="flex flex-col justify-center items-center w-[612px] h-full p-119px">
          <img
            src={currentTab.src}
            alt={currentTab.name}
            className="w-[558px] h-[474px] rounded-[20px] filter drop-shadow-[0px 4px 4px rgba(151, 71, 255, 0.44)]"
          />
        </div>
        <div className="font-montserrat flex flex-col justify-center items-start w-[612px] h-full p-0">
          <h3 className="text-[36px] text-[#4A4A68] font-normal font-montserrat mb-2">{currentTab.label}</h3>
          <p className="text-[#4A4A68] w-[373px] h-[60px] text-[20px] mb-6">Explanation of why you are going to love it and the benefit!</p>
          <button className="w-[141px] h-[48px] rounded-[15.78px] border-[2px] border-[#000000] p-[10px] g-[10px]">
            Learn More
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-[847px] bg-[#2F007A]">
      <div className="w-full mx-auto mt-16 text-center">
        <h2 className="text-white text-4xl font-medium font-montserrat top-[39px] pt-[20px]">
          Features
        </h2>
      </div>
      <div className="flex justify-center mt-8">
        <nav className={`flex space-x-11 ${tabs.length > 2 ? 'flex-col sm:flex-row' : 'flex-row'}`}>
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`flex items-center justify-between w-full text-[#FFFFFF] ${
                activeTab === tab.name ? "text-[#FFFFFF] border-b-2 border-[#FFFFFF]" : "text-[#FFFFFF] hover:text-[#FFFFFF] font-light text-[20px]"
              }`}
              onClick={() => handleTabClick(tab.name)}
            >
              <span className=" font-montserrat">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="w-full mt-8 mx-auto max-w-lg flex flex-col items-center">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Features;


