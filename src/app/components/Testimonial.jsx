"use client";
import Image from "next/image";
import girl1 from "../../../public/img/girl1.webp";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const Testimonial = () => {
  const clientImages = [
    "https://randomuser.me/api/portraits/women/75.jpg",
    "https://randomuser.me/api/portraits/men/76.jpg",
    "https://randomuser.me/api/portraits/women/77.jpg",
    "https://randomuser.me/api/portraits/men/78.jpg",
    "https://randomuser.me/api/portraits/women/79.jpg",
    "https://randomuser.me/api/portraits/women/80.jpg",
    "https://randomuser.me/api/portraits/men/81.jpg",
  ];

  return (
    <div className="w-full py-20 px-4 md:px-20 text-center">
      <div className="py-10">
        <h1 className="text-4xl md:text-6xl font-bold">Client Testimonials</h1>
        <p className="text-gray-700 text-lg md:text-xl py-4 max-w-3xl mx-auto">
          See what our clients have to say about our services. Real reviews from
          happy customers.
        </p>
        <div className="mt-10 flex items-center justify-center pb-5 gap-x-6">
          {/* Client Images */}
          <div className="hidden sm:flex -space-x-2 overflow-hidden">
            {clientImages.map((src, index) => (
              <div key={index} className="relative w-12 h-12">
                <Image
                  className="rounded-full ring-2 ring-white"
                  src={src}
                  alt={`Client ${index + 1}`}
                  fill
                  sizes="48px"
                />
              </div>
            ))}
          </div>
          {/* Rating Section */}
          <div className="border-none sm:border-l-2 border-black sm:pl-8">
            <div className="flex items-center">
              <h3 className="text-2xl font-semibold mr-2">4.6</h3>
              <Image
                className="w-5"
                src="https://www.svgrepo.com/show/513354/star.svg"
                alt="stars-icon"
                width={20}
                height={20}
              />
            </div>
            <p className="text-sm">Rated by 25k+ on Google.</p>
          </div>
        </div>
      </div>

      {/* Swiper Testimonial Slider */}
      <div className="w-full ">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {[3, 4, 5 ,6,7,8].map((rating, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col mx-10  justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-gray-300 ">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-lg">
                  <div className="relative w-full h-72">
                    <Image
                      src={girl1}
                      alt="Testimonial"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-bold text-gray-800">
                        Exceptional Service!
                      </h2>
                      <Stack spacing={1}>
                        <Rating name="size-medium" value={rating} readOnly />
                      </Stack>
                    </div>
                    <p className="text-gray-700 leading-tight mt-2">
                      The team was extremely professional and helpful. I highly
                      recommend their services!
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
