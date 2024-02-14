import React, { useState, useEffect } from "react";
import img from "../assets/WhatsApp Image 2024-01-29 at 18.40 1.jpg";
import { LuRectangleHorizontal } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";

const Features = () => {
  const [activeTab, setActiveTab] = useState("community");
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 680);
    setIsTablet(window.innerWidth >= 680 && window.innerWidth < 770);
  };
  window.addEventListener('resize', checkMobile);
  useEffect(() => {
    checkMobile();
  }, []);

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
      <div className={`flex ${isTablet ? 'flex-col' : 'flex-row items-stretch'} 
    ${isMobile ? 'flex-col' : 'space-x-4'} p-2 w-full h- bg-${isTablet ? 'transparent' : '[#ECE4FF]'} rounded-lg`}>
      <div className={`flex ${isTablet ? 'w-full h-auto' : 'w-full md:w-1/2'} justify-center items-center p-2 space-y-2 rounded-lg`}>
        <img src={currentTab.src} alt={currentTab.name} className={`w-full ${isTablet ? 'w-[704px]' : 'h-auto'} rounded-lg shadow-lg `} />
      </div>
        <div className="flex flex-col justify-center items-start p-2 space-y-2 w-full md:w-1/2 h-full rounded-lg">
          <div className="flex flex-col items-start space-y-2">
            <h3 className={`text-4xl font-montserrat font-semibold text-${isTablet ? 'white' : '[#4A4A68]'} `}>{currentTab.label}</h3>
            <p className={`text-xl font-montserrat font-normal text-${isTablet ? 'white' : '[#4A4A68]'}`}>Explanation of why you are going to love it and the benefit!</p>
          </div>
          <button className={`flex flex-col justify-center items-center p-2 space-y-2 w-[141px] h-[48px] border-[2px] border-${isTablet ? 'white' : 'transparent'} border-[#4A4A68] rounded-[15.78px]`}>
            <p className={`text-sm font-normal text-${isTablet ? 'white' : '[#4A4A68]'}w-[114px] h-[24px]`}>Learn More</p>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col items-center p-4 space-y-4 w-full h-[947px] bg-[#2f007a]`}>
      <div className="flex flex-row justify-center items-center p-4 space-x-4 w-full h-16">
        <h2 className="text-4xl font-montserrat font-semibold text-white">Features</h2>
      </div>
      <div className="flex flex-row justify-between items-center w-[560px] h-16">
        {isMobile ? (
          <div className="flex flex-row justify-center items-center font-montserrat w-full">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`focus:outline-none ${activeTab === tab.name ? "text-white border-b-2 border-white" : "text-transparent"}`}
                onClick={() => handleTabClick(tab.name)}
              >
                {activeTab === tab.name ? tab.label : ""}
              </button>
            ))}
          </div>
        ) : (
          tabs.map((tab) => (
            <button
              key={tab.name}
              className={`text-white text-lg ${activeTab === tab.name ? "border-b-2 border-white" : ""}`}
              onClick={() => handleTabClick(tab.name)}
            >
              {tab.label}
            </button>
          ))
        )}
      </div>
      <div className="flex flex-col items-center p-4 space-y-4 w-full h-[556px]">
        {renderTabContent()}
        {isMobile && (
          <div className="flex flex-row justify-center items-center p-2 space-x-2 w-36 h-auto">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`focus:outline-none ${activeTab === tab.name ? "text-white" : ""}`}
                onClick={() => handleTabClick(tab.name)}
              >
                {activeTab === tab.name ? <LuRectangleHorizontal className="w-[27px] h-[10px] rounded-[15px] bg-white" /> : <FaRegCircle className="w-[10px] h-[10px] bg-[#9F75FF] text-[#9F75FF]" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;
