"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import React from "react";
import food1 from "../../../public/img/food1.webp";
import food2 from "../../../public/img/food2.webp";
import food3 from "../../../public/img/food3.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
const Explore = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const exploreItems = [
    { title: "Our Catering", desc: "Delicious catering options for any event.", img: food1, btnText: "Order Catering" },
    { title: "The Food", desc: "Explore our mouthwatering menu options.", img: food2, btnText: "Food Menu" },
    { title: "The Gelato", desc: "Treat yourself to our delightful gelato.", img: food3, btnText: "Discover More" },
  ];

  return (
    <div className="w-full px-6 py-16 md:px-16 lg:px-20 bg-gray-50">
      <div className="text-center max-w-3xl mx-auto" data-aos="fade-up-right">
        <h1 className="text-4xl md:text-5xl font-bold py-3">Explore Our Alowishus</h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Discover a variety of flavors crafted with love and passion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16" data-aos="fade-up-left">
        {exploreItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-110 rounded-xl flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-gray-600 mt-2">{item.desc}</p>
            <div className="w-full flex justify-center my-4">
              <Image src={item.img} alt={item.title} height={180} width={180} className="rounded-lg" />
            </div>
            <Button className="text-lg rounded-full mt-3 px-6 py-3 font-medium transition-transform hover:scale-105">
              {item.btnText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;