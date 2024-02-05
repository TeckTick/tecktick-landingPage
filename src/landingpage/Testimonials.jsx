import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TestmonialCard from "../components/TestmonialCard";



const Testimonials = () => {
  return (
    <div className="bg-[#ECE4FF] flex flex-col items-center justify-center p-10 text-[#303030]">
      <h1 className="font-montserrat font-medium text-[40px] text-[#4A4A68] mb-6">
        Testimonials
      </h1>
      <div className="w-full  flex items-center justify-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-full"
        >
          <SwiperSlide className="my-20">
            <TestmonialCard />
          </SwiperSlide>
          <SwiperSlide className="my-20">
            <TestmonialCard />
          </SwiperSlide>
          <SwiperSlide className="my-20">
            <TestmonialCard />
          </SwiperSlide>
          <SwiperSlide className="my-20">
            <TestmonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;