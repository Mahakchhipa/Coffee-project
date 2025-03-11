"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
// import React from "react";
import ordercoffee from "../../../public/img/ordercoffee.webp";
import { Button } from "@/components/ui/button";

const OrderCoffee = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-20" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold">
              Order Your Favourite Coffee
            </h1>
            <p className="text-lg text-gray-700 my-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              reprehenderit repellat aut molestias est, odit quos voluptatem
              sint dicta, mollitia minima corporis accusantium optio vero?
            </p>
            <Button className="text-lg rounded-xl my-3 hover:scale-105 transition-transform font-normal tracking-wide px-6 py-3">
              Order Now
            </Button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center" data-aos="flip-right">
            <Image
              src={ordercoffee}
              alt="coffee"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCoffee;
