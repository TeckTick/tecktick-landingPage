import notification from "../../../assets/images/notification.svg";
import media from "../../../assets/images/media.svg";
import support from "../../../assets/images/support.svg";
import community from "../../../assets/images/community.svg";
import Partner from "./Partner";
import { partners } from "../../../data/partners";

import Marquee from "react-fast-marquee";

const Howitworks = () => {
  return (
    <div className="p-5 relative overflow-hidden">
      <div className=" items-end justify-center mx-auto w-full h-[128px] my-5 flex">
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          {partners.map((partner) => (
            <Partner key={partner.id} {...partner} />
          ))}
        </Marquee>
      </div>
      <hr className="mx-auto z-10 bg-black w-[90%] h-[2px] mt-20" />

      <div className="py-8 flex flex-col items-center justify-center gap-12">
        <h1
          className="text-[24px] font-medium sm:text-[36px] font-montserrat text-center lg:text-[40px] text-[#4A4A68] 
"
        >
          How It Works
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-5 mx-auto w-full gap-5">
          <div className="flex flex-col gap-5 items-center justify-start text-center font-inter">
            <span className="h-[84px] w-[84px] bg-[#EBE5FF] rounded-lg p-5  lex items-center justify-center">
              <img src={media} alt="" className="object-cover w-full" />
            </span>
            <h2 className="font-semibold text-[#3a4f39]">
              Launch into the TeckTick Galaxy
            </h2>
            <p className="text-[#3a4f39]">
              Navigate through the vast expanse of TeckTick's universe and
              select your desired destination. Each portal offers a unique
              adventure tailored to your interests and aspirations.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center justify-start text-center font-inter">
            <span className="h-[84px] w-[84px] bg-[#EBE5FF] rounded-lg p-5    flex items-center justify-center">
              <img src={notification} alt="" className="object-cover w-full" />
            </span>
            <h2 className="font-semibold text-[#3a4f39]">
              Connect with the Community Cosmos
            </h2>
            <p className="text-[#3a4f39]">
              Immerse yourself in the dynamic Community Cosmos, where innovation
              thrives and connections flourish. Engage with like-minded cosmic
              explorers, share insights, and fuel the spirit of collaboration.
            </p>
          </div>
          <div className="flex flex-col gap-5 font-inter items-center justify-start text-center">
            <span className="h-[84px] w-[84px] bg-[#EBE5FF] rounded-lg p-5    flex items-center justify-center">
              <img src={support} alt="" className="object-cover w-full" />
            </span>
            <h2 className="font-semibold text-[#3a4f39]">
              Explore Creative Realms
            </h2>
            <p className="text-[#3a4f39]">
              Venture into the Hackathon space, a pulsating hub of creativity
              and competition. Join forces with fellow cosmic coders, unleash
              your ingenuity, and compete for cosmic acclaim.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center justify-start text-center font-inter">
            <span className="h-[84px] w-[84px] bg-[#EBE5FF] rounded-lg p-5    flex items-center justify-center">
              <img src={community} alt="" className="object-cover w-full" />
            </span>
            <h2 className="font-semibold font-inter text-[#3a4f39]">
              Engage with the TeckTick Cosmos
            </h2>
            <p className="text-[#3a4f39] ">
              Journey through the Merchandise Cosmos and discover stellar
              treasures adorned with the TeckTick insignia. Elevate your cosmic
              style with exclusive merchandise that celebrates your passion for
              innovation.
            </p>
          </div>
        </div>
      </div>
      <div className="blur m-5 mx-auto  absolute"></div>
    </div>
  );
};

export default Howitworks;
