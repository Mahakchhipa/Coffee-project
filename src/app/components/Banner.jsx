"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
// import "./styles.css";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import cafe from "../../../public/img/cafe.webp";
import hero from "../../../public/img/hero.png";
import coffee from "../../../public/img/coffee.png";
import holding from "../../../public/img/holding.png";
import { Button } from "@/components/ui/button";
const Banner = () => {
  return (
    <div className=" bg-gray-100">
      <div className="px-20 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
            pagination={{
              clickable: true,
            }}
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
                      className="absolute top-52 right-44"
                    />{" "}
                  </h1>
                  <p className="text-md font-normal">
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
                      className="text-md font-semibold tracking-wide hover:scale-110 transition-all p-7"
                    >
                      {" "}
                      Shop Coffee{" "}
                    </Button>
                  </div>
                </div>
                <div className="relative ">
                  {" "}
                  <Image
                    src={cafe}
                    alt="image"
                    height={100}
                    width={100}
                    className="absolute top-8 right-4"
                  />
                  <Image src={hero} alt="banner-img" height={550} width={550} />{" "}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container md:pt-20 pt-10 ">
              <div className="grid grid-cols-2">
                <div className=" relative ">
                  <h1 className="text-8xl font-bold py-4 tracking-wide ">
                    {" "}
                    Alowishus Deliciious Coffee{" "}
                    <Image
                      src={cafe}
                      alt="image"
                      height={100}
                      width={100}
                      className="absolute top-52 right-44"
                    />{" "}
                  </h1>
                  <p className="text-md font-normal">
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
                      className="text-md font-semibold tracking-wide hover:scale-110 transition-all p-7"
                    >
                      {" "}
                      Shop Coffee{" "}
                    </Button>
                  </div>
                </div>
                <div className="relative items-center flex justify-center">
                  {" "}
                  <Image
                    src={cafe}
                    alt="image"
                    height={100}
                    width={100}
                    className="absolute top-8 right-4"
                  />
                  <Image src={coffee} alt="banner-img" height={550} width={550} />{" "}
                </div>
              </div>
            </div>
          </SwiperSlide>
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
                      className="absolute top-52 right-44"
                    />{" "}
                  </h1>
                  <p className="text-md font-normal">
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
                      className="text-md font-semibold tracking-wide hover:scale-110 transition-all p-7"
                    >
                      {" "}
                      Shop Coffee{" "}
                    </Button>
                  </div>
                </div>
                <div className="relative items-center flex justify-center ">
                  {" "}
                  <Image
                    src={cafe}
                    alt="image"
                    height={100}
                    width={100}
                    className="absolute top-8 right-4"
                  />
                  <Image src={holding} alt="banner-img" height={300} width={400} />{" "}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
