import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TestmonialCard from "./TestmonialCard";

import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="bg-[#ECE4FF] flex flex-col items-center justify-center p-5 sm:p-10 text-[#303030] ">
      <div className="max-w-[1440px] container mx-auto">
        <h1 className="font-montserrat font-medium text-2xl sm:text-[32px] md:text-[40px] text-[#4A4A68] sm:mb-6 text-center">
          Testimonials
        </h1>
        <div className="w-full flex items-center justify-center">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            draggable={true}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="w-full">
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="mt-20 mb-14 sm:mb-20">
                <TestmonialCard
                  avator={testimonial.avator.avator}
                  title={testimonial.title}
                  description={testimonial.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
