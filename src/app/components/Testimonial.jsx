"use client";
import Image from "next/image";
import girl1 from "../../../public/img/girl1.webp";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import * as React from "react";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
const Testimonial = () => {
  return (
    <div>
      <div className="px-20 ">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center hover:scale-105 min-h-screen">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                <Image src={girl1} alt="Mountain" className="w-full h-72 " />
                <div className="p-6">
                  <div className="grid grid-cols-2">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-2">
                        Beautiful Mountain View
                      </h2>
                    </div>
                    <div>
                      <Stack spacing={1}>
                        <Rating name="size-medium" defaultValue={3} />
                      </Stack>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-tight mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam eu sapien porttitor, blandit velit ac, vehicula
                    elit. Nunc et ex at turpis rutrum viverra.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center hover:scale-105  min-h-screen">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                <Image src={girl1} alt="Mountain" className="w-full h-72 " />
                <div className="p-6">
                  <div className="grid grid-cols-2">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-2">
                        Beautiful Mountain View
                      </h2>
                    </div>
                    <div>
                      <Stack spacing={1}>
                        <Rating name="size-medium" defaultValue={4} />
                      </Stack>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-tight mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam eu sapien porttitor, blandit velit ac, vehicula
                    elit. Nunc et ex at turpis rutrum viverra.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center hover:scale-105 items-center min-h-screen">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                <Image src={girl1} alt="Mountain" className="w-full h-72 " />
                <div className="p-6">
                  <div className="grid grid-cols-2">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-2">
                        Beautiful Mountain View
                      </h2>
                    </div>
                    <div>
                      <Stack spacing={1}>
                        <Rating name="size-medium" defaultValue={5} />
                      </Stack>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-tight mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam eu sapien porttitor, blandit velit ac, vehicula
                    elit. Nunc et ex at turpis rutrum viverra.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
