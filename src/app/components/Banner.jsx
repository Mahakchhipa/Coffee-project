"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination"
// import "./styles.css";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import cafe from "../../../public/img/cafe.webp";
import hero from "../../../public/img/hero.webp";
import { Button } from "@/components/ui/button";
const Banner = () => {
  return (
    <div>
      <div className="container px-20">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 300000,
            disableOnInteraction: false,
          }}
          //   pagination={{
          //     clickable: true,
          //   }}
          //   navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container md:pt-20 pt-10 ">
              <div className="grid grid-cols-2">
                <div className=" relative">
                  <h1 className="text-8xl font-bold py-4 tracking-wide ">
                    {" "}
                    Alowishus Deliciious Coffee{" "}
                    <Image
                      src={cafe}
                      alt="image"
                      height={100}
                      width={100}
                      className="absolute top-52 right-64"
                    />{" "}
                  </h1>
                  <p className="text-md">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi odio accusamus vero explicabo dolorum quaerat veritatis
                    neque culpa quo, ullam recusandae saepe quas molestias
                    doloribus rerum ut nam quos? Eius.
                  </p>
                  <div className="flex gap-7 py-6 mx-4">
                    {" "}
                    <Button className="text-md hover:scale-110 font-normal tracking-wide transition-all p-7">
                      {" "}
                      Download App
                    </Button>
                    <Button
                      variant="outline"
                      className="text-md font-semibold tracking-wide hover:scale-110 transition-all p-7   "
                    >
                      {" "}
                      Shop Coffee{" "}
                    </Button>
                  </div>
                </div>
                <div className="relative ">
                  {" "}
                 {" "}
                  <Image
                    src={cafe}
                    alt="image"
                    height={100}
                    width={100}
                    className="absolute top-12 right-6 "
                  />
                   <Image
                    src={hero}
                    alt="banner-img"
                    height={600}
                    width={600}
                  />{" "}
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
