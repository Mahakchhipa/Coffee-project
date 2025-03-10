import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import instant from "../../../public/img/instant.webp";

const Instant = () => {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-2 gap-6 p-20">
        <div className=" content-center justify-center px-10">
          <h1 className="text-6xl font-bold w-3/4 ">
            {" "}
            Instant Coffee At Your Home
          </h1>
          <p className="text-gray-600 py-6 text-xl font-normal">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            reprehenderit repellat aut molestias est, odit quos voluptatem sint
            dicta, mollitia minima corporis accusantium optio vero?
          </p>
          <Button className="text-lg rounded-xl my-3 hover:scale-110 font-normal tracking-wide transition-all p-7">
            Download Your App
          </Button>
        </div>
        <div className="  grid grid-cols-2 relative">
          <div>
            <Image
              src={instant}
              alt="imgs"
              height={250}
              width={250}
              className="-rotate-12   "
            />
          </div>
          <div>
            <Image
              src={instant}
              alt="imgs"
              height={250}
              width={250}
              className="absolute bg-amber-300  top-0 left-20 z-10 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instant;
