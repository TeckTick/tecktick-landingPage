import React, { useState } from "react";



const FeatureTab = ({ tab, isActive, onClick }) => {
  const handleClick = () => {
    onClick(tab.name);
  };

  return (
    <button
      className={`flex items-center justify-between w-full text-[#FFFFFF] ${
        isActive ? "text-[#FFFFFF] border-b-2 border-[#FFFFFF]" 
        : "text-[#FFFFFF] hover:text-[#FFFFFF] font-light text-[20px]"
      }`}
      onClick={handleClick}
    >
       <span className=" font-montserrat">{tab.label}</span>
      
    </button>
  );
};

const FeatureContent = ({ tab, children, src}) => {
  return (
    <div className="flex justify-center items-center absolute w-[1236px] h-[556px]  top-1/2 
    left-1/2 transform -translate-x-1/2  bg-[#ECE4FF] border-2 border-white rounded-10 shadow-lg">
      <div className="flex flex-col justify-center items-center w-[612px] h-full p-119px">
      <img
        src={src}
        alt={tab.name}
        className="w-[558px] h-[474px] rounded-20 filter drop-shadow-[0px 4px 4px rgba(151, 71, 255, 0.44)]"
      />
      </div>
      <div className="font-montserrat flex flex-col justify-center items-start w-[612px] h-full p-0">
      <h3 className="text-[36px] text-[#4A4A68] font-normal font-montserrat mb-2">{tab.label}</h3>
      <p className="text-[#4A4A68] w-[373px] h-[60px] text-[20px] mb-6">{children}</p>
      <button className="w-[141px] h-[48px] rounded-[15.78px] border-[2px] border-[#000000] p-[10px] g-[10px]">
        Learn More
      </button>
      </div>
    </div>
  );
};

const Features = () => {
  const [activeTab, setActiveTab] = useState("community");

  const tabs = [
    { name: "community", label: "Community", src: "https://source.unsplash.com/random"},
    { name: "events", label: "Events", src: "https://source.unsplash.com/random"},
    { name: "hackathons", label: "Hackathons", src: "https://source.unsplash.com/random" },
    { name: "merchandise", label: "Merchandise", src: "https://source.unsplash.com/random"},
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "community":
        return (
          <FeatureContent tab={tabs[0]} src={tabs[0].src}>
            Explanation of why you are going to love it and the benefit!
          </FeatureContent>
        );
      case "events":
        return (
          <FeatureContent tab={tabs[1]} src={tabs[1].src}>
            Explanation of why you are going to love it and the benefit!
          </FeatureContent>
        );
      case "hackathons":
        return (
          <FeatureContent tab={tabs[2]} src={tabs[2].src}>
            Explanation of why you are going to love it and the benefit!
          </FeatureContent>
        );
      case "merchandise":
        return (
          <FeatureContent tab={tabs[3]} src={tabs[3].src}>
            Explanation of why you are going to love it and the benefit!
          </FeatureContent>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-[847px] bg-[#2F007A]">
      <div className="w-full mx-auto mt-16 text-center">
        <h2 className="text-white text-4xl font-medium font-montserrat top-[39px] pt-[20px]">
          Features
        </h2>
      </div>
      <div className="flex justify-center mt-8">
        <nav className="flex space-x-4">
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
      <div className="w-full mt-8 mx-auto max-w-lg">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Features;
