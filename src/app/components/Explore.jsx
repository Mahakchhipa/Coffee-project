import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import food1 from "../../../public/img/food1.webp";
import food2 from "../../../public/img/food2.webp";
import food3 from "../../../public/img/food3.webp";
const Explore = () => {
  return (
    <div className="w-full  p-20  ">
      <div className="grid grid-cols-6 text-center">
        <div className="col-start-2 col-span-4">
          {" "}
          <h1 className="text-6xl font-bold py-3"> Explore Our Alowishus</h1>
          <p className="text-xl font-normal text-gray-800 ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio
            quisquam dicta maxime, perferendis veniam!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-20 my-20">
        <div className=" justify-center text-center items-center hover:shadow-xl shadow-lg hover:scale-110 p-5  ">
          <h1 className="text-3xl font-bold">Our Catering </h1>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur </p>
          <div className="justify-center text-center items-center flex">
            {" "}
            <Image src={food1} alt="food" height={200} width={200} />
          </div>

          <Button className="text-lg rounded-4xl my-3 hover:scale-110 font-normal tracking-wide transition-all p-7">
            Order Catering
          </Button>
        </div>
        <div className=" justify-center text-center items-center hover:shadow-xl shadow-lg hover:scale-110 p-5  ">
          <h1 className="text-3xl font-bold">The Food </h1>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur </p>
          <div className="justify-center text-center items-center flex">
            {" "}
            <Image src={food2} alt="food" height={200} width={200} />
          </div>
          <Button className="text-lg rounded-4xl my-3 hover:scale-110 font-normal tracking-wide transition-all p-7">
            {" "}
            Food Menu{" "}
          </Button>
        </div>
        <div className=" justify-center text-center items-center hover:shadow-xl shadow-lg hover:scale-110 p-5  ">
          <h1 className="text-3xl font-bold"> The Getato</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur </p>
          <div className="justify-center text-center items-center flex">
            {" "}
            <Image src={food3} alt="food" height={200} width={200} />
          </div>
          <Button className="text-lg rounded-4xl my-3 hover:scale-110 font-normal tracking-wide transition-all p-7">
            {" "}
            Discover More{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
