import React, { useState } from "react";
import img from "../../assets/images/WhatsApp Image 2024-01-29 at 18.40 1.jpg";
import { LuRectangleHorizontal } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";

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
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 xl:gap-10  w-full h-full bg-[#ECE4FF] md:bg-[#2f007a] lg:bg-[#ECE4FF] rounded-lg">
        <div className="lg:w-1/2 flex justify-center items-center rounded-lg">
          <img
            src={currentTab.src}
            alt={currentTab.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-start p-2 space-y-2 md:w-1/2 h-full rounded-lg sm:text-[#4A4A68] md:text-white lg:text-[#4A4A68] mt-5 font-montserrat">
          <div className="flex flex-col items-start space-y-2 mb-5 md:mb-10 lg:text-[#4A4A68] md:gap-[24px]">
            <h3 className="text-4xl font-montserrat font-semibold">
              {currentTab.label}
            </h3>
            <p className="text-base md:text-xl font-montserrat font-normal ">
              Explanation of why you are going to love it and the benefit!
            </p>
          </div>
          <button className="flex justify-center items-center py-2 px-7 space-y-2  border-[2px] border-[#4A4A68] md:border-white lg:border-[#4A4A68] rounded-full md:rounded-[15.78px] mt-7 md:mt-[24px]">
            <p className="text-xl font-montserrat">Learn More</p>
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#2f007a] font-montserrat py-10 lg:pb-[6rem]">
      <div className="container flex flex-col items-center p-5 space-y-4 mx-auto max-w-[1440px]">
        {/* Features */}
        <div className="text-center h-16 p-4">
          <h2 className="text-4xl font-montserrat font-semibold text-white">
            Our Stack
          </h2>
        </div>

        <div className="hidden md:flex justify-center items-center w-full md:max-w-[560px] md:justify-between h-[50px]">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`focus:outline-none text-white text-lg ${
                activeTab === tab.name ? "border-b-2 border-white" : ""
              }`}
              onClick={() => handleTabClick(tab.name)}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex justify-center items-center w-full md:max-w-[560px] h-[50px] md:justify-between md:hidden">
          <button
            key={activeTab}
            className="focus:outline-none text-white text-lg border-b-2 border-white"
            onClick={() => handleTabClick(activeTab)}>
            {tabs.find((tab) => tab.name === activeTab)?.label}
          </button>
        </div>

        <div className="flex items-center justify-center w-full">
          {renderTabContent()}
        </div>

        <div className="flex justify-center items-center w-full gap-3 md:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`focus:outline-none ${
                activeTab === tab.name ? "text-white" : ""
              }`}
              onClick={() => handleTabClick(tab.name)}>
              {activeTab === tab.name ? (
                <LuRectangleHorizontal className="w-[27px] h-[10px] rounded-[15px] bg-white" />
              ) : (
                <FaRegCircle className="w-[10px] h-[10px] bg-[#9F75FF] text-[#9F75FF]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
