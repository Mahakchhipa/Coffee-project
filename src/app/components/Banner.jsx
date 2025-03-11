"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import cafe from "../../../public/img/cafe.webp";
import hero from "../../../public/img/hero.png";
import coffee from "../../../public/img/coffee.png";
import holding from "../../../public/img/holding.png";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const slides = [
    { image: hero, alt: "banner-img" },
    { image: coffee, alt: "coffee-img" },
    { image: holding, alt: "holding-img" },
  ];

  return (
    <div className="bg-gray-100">
      <div className="px-4 md:px-20">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="container md:pt-20 pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="relative text-center md:text-left" data-aos="fade-right">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold py-4 tracking-wide">
                      Alowishus Deliciious Coffee
                      <Image
                        src={cafe}
                        alt="image"
                        height={80}
                        width={80}
                        className="absolute top-10 right-10 hidden md:block"
                      />
                    </h1>
                    <p className="text-sm md:text-md font-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi odio accusamus vero explicabo dolorum quaerat veritatis.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 py-6 justify-center md:justify-start">
                      <Button className="text-sm md:text-md hover:scale-110 font-normal tracking-wide transition-all px-6 py-3">
                        Download App
                      </Button>
                      <Button
                        variant="outline"
                        className="text-sm md:text-md font-semibold tracking-wide hover:scale-110 transition-all px-6 py-3"
                      >
                        Shop Coffee
                      </Button>
                    </div>
                  </div>
                  <div className="relative flex justify-center items-center" data-aos="fade-left">
                    <Image src={slide.image} alt={slide.alt} height={450} width={450} className="max-w-full h-auto" />
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

export default Banner;