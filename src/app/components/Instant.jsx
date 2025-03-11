"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import instant from "../../../public/img/instant.webp";

const Instant = () => {
   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10" data-aos="fade-down-right">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Instant Coffee At Your Home
          </h1>
          <p className="text-gray-600 py-6 text-lg md:text-xl font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            reprehenderit repellat aut molestias est, odit quos voluptatem sint
            dicta, mollitia minima corporis accusantium optio vero?
          </p>
          <Button className="text-lg rounded-xl hover:scale-105 font-normal tracking-wide transition-all px-6 py-3">
            Download Your App
          </Button>
        </div>
        {/* Image Section */}
        <div className="relative flex justify-center items-center md:w-1/2" data-aos="fade-down-left">
          <div className="relative w-[500px] h-[500px]">
            <Image
              src={instant}
              alt="Instant Coffee"
              layout="fill"
              objectFit="contain"
              
            />
             <Image
              src={instant}
              alt="Instant Coffee"
              layout="fill"
              objectFit="contain"
              className=" rotate-12"
            />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Instant;