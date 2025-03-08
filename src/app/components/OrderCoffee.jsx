import Image from "next/image";
import React from "react";
import ordercoffee from "../../../public/img/ordercoffee.webp";
import { Button } from "@/components/ui/button";
const OrderCoffee = () => {
  return (
    <div className="bg-gray-50 md:py-16">
      <div className="container px-20">
        <div className=" grid grid-cols-2 gap-20">
          <div className="">
            <Image src={ordercoffee} alt="coffee" height={600} width={600} />
          </div>
          <div className="px-8 justify-center content-center">
            <h1 className="text-7xl font-bold"> Order Your Favourite Coffee</h1>
            <p className="text-lg my-4">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              reprehenderit repellat aut molestias est, odit quos voluptatem
              sint dicta, mollitia minima corporis accusantium optio vero? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Hic
              reprehenderit repellat aut molestias est, odit quos voluptatem
              sint dicta, mollitia minima corporis accusantium optio vero?
            </p>
            <Button className="text-lg rounded-4xl my-3 hover:scale-110 font-normal tracking-wide transition-all p-7">
              {" "}
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCoffee;
