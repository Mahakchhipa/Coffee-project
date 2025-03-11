"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import midcoffee1 from "../../../public/img/midcoffee1.webp";
import { Button } from "@/components/ui/button";

const coffeeItems = [
  {
    id: 1,
    title: "Double Espresso",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur omnis quis vitae molestias, doloribus ratione officia tempora.",
    price: "$59.99",
    image: midcoffee1,
  },
  {
    id: 2,
    title: "Caramel Macchiato",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur omnis quis vitae molestias, doloribus ratione officia tempora.",
    price: "$49.99",
    image: midcoffee1,
  },
  {
    id: 3,
    title: "Mocha Latte",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur omnis quis vitae molestias, doloribus ratione officia tempora.",
    price: "$45.99",
    image: midcoffee1,
  },
];

const BestSelling = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="text-center max-w-2xl mx-auto" data-aos="fade-right">
        <h1 className="text-4xl md:text-6xl font-bold py-3">Best Selling Coffee</h1>
        <p className="text-lg md:text-xl text-gray-800 py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio quisquam dicta maxime, perferendis veniam!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12" data-aos="fade-left">
        {coffeeItems.map((coffee) => (
          <div
            key={coffee.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all relative text-center"
          >
            <div className="flex flex-col items-center">
              <p className="text-gray-500 text-lg">#Selling</p>
              <h2 className="text-2xl font-bold">{coffee.title}</h2>
              <Image src={coffee.image} alt={coffee.title} height={150} width={150} className="mt-4" />
              <p className="text-gray-700 mt-4 text-base md:text-lg">{coffee.description}</p>
              <div className="flex justify-between items-center w-full mt-6">
                <span className="text-xl font-bold">{coffee.price}</span>
                <Button className="text-lg rounded-xl px-6 py-3 hover:scale-110 font-medium tracking-wide transition-all">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
