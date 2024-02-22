import React from "react";
import membership_benefits from "../../../assets/images/membership-benefits.png";
import upcoming_events from "../../../assets/images/upcoming-events.png";
import { Link } from "react-router-dom";
const DiscoverEvents = () => {
  return (
    <div className="w-full font-montserrat py-16">
      <h1 className="font-medium text-black opacity-80 text-[36px] sm:text-[44px] mb-16 text-center">
        Discover related topics
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full mx-auto items-center justify-center gap-[28px] px-5 sm:px-10 md:px-20">
        <Link>
          <div className="w-full max-w-[608px] mx-auto ">
            <img
              src={upcoming_events}
              alt=""
              className="object-cover  rounded-t-[20px]"
            />
            <span className="block border-dashed border-black border rounded-b-[20px] border-t-0 py-24">
              <h2 className="text-center text-[#262641] font-bold text-[24px] lg:text-[32px] opacity-80 ">
                Upcoming events
              </h2>
            </span>
          </div>
        </Link>

        <Link>
          <div className="w-full max-w-[608px] mx-auto ">
            <img
              src={membership_benefits}
              alt=""
              className="object-cover  rounded-t-[20px] mb-[-20px]"
            />
            <span className="block border-dashed border-black border rounded-b-[20px] border-t-0 pt-[106px] pb-24">
              <h2 className="text-center text-[#262641] font-bold text-[24px] lg:text-[32px] opacity-80 ">
                Membership benefits
              </h2>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DiscoverEvents;
