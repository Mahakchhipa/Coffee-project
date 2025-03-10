import Image from "next/image";
import React from "react";
import midcoffee1 from "../../../public/img/midcoffee1.webp";
import { Button } from "@/components/ui/button";
const BestSelling = () => {
  return (
    <div className="bg-gray-50">
      <div className=" px-20">
        <div className="grid grid-cols-3 gap-10">
          <div className=" justify-center text-center items-center hover:shadow-xl shadow-lg hover:scale-110 p-5  ">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Image
                  src={midcoffee1}
                  alt="coffee-img"
                  height={800}
                  width={600}
                />
              </div>
              <div className=" content-center justify-center">
                <p className="text-gray-500 text-2xl "> #Selling</p>
                <h2 className="text-3xl font-bold"> Double Espresso</h2>
              </div>
            </div>
            <div className="text-center  w-full">
              <div className=" font-normal w-full">
                <p className="text-xl text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequatur omnis quis vitae molestias, doloribus ratione
                  officia tempora, saepe impedit ea earum! Aspernatur
                  reprehenderit repellendus ipsum necessitatibus nesciunt
                  blanditiis, consequatur ex.
                </p>
                <div className="grid grid-cols-2 my-4 ">
                  <div className="text-2xl font-bold content-center">
                    {" "}
                    $ 59.99
                  </div>
                  <div>
                    <Button className="text-lg rounded-xl my-3 hover:scale-110 font-normal tracking-wide transition-all p-7">
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" justify-center text-center items-center hover:shadow-xl shadow-lg hover:scale-110 p-5 relative  ">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Image
                  src={midcoffee1}
                  alt="coffee-img"
                  height={280}
                  width={280}
                  className="absolute "
                />
              </div>
              <div className=" content-center justify-center">
                <p className="text-gray-500 text-2xl "> #Selling</p>
                <h2 className="text-3xl font-bold"> Double Espresso</h2>
              </div>
            </div>
            <div className="text-center  w-full">
              <div className=" font-normal w-full">
                <p className="text-xl text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequatur omnis quis vitae molestias, doloribus ratione
                  officia tempora, saepe impedit ea earum! Aspernatur
                  reprehenderit repellendus ipsum necessitatibus nesciunt
                  blanditiis, consequatur ex.
                </p>
                <div className="grid grid-cols-2 my-4 ">
                  <div className="text-2xl font-bold content-center">
                    {" "}
                    $ 59.99
                  </div>
                  <div>
                    <Button className="text-lg rounded-xl my-3 hover:scale-110 font-normal tracking-wide transition-all p-7">
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" justify-center text-center items-center hover:shadow-xl shadow-lg hover:scale-110 p-5  ">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Image
                  src={midcoffee1}
                  alt="coffee-img"
                  height={800}
                  width={600}
                />
              </div>
              <div className=" content-center justify-center">
                <p className="text-gray-500 text-2xl "> #Selling</p>
                <h2 className="text-3xl font-bold"> Double Espresso</h2>
              </div>
            </div>
            <div className="text-center  w-full">
              <div className=" font-normal w-full">
                <p className="text-xl text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequatur omnis quis vitae molestias, doloribus ratione
                  officia tempora, saepe impedit ea earum! Aspernatur
                  reprehenderit repellendus ipsum necessitatibus nesciunt
                  blanditiis, consequatur ex.
                </p>
                <div className="grid grid-cols-2 my-4 ">
                  <div className="text-2xl font-bold content-center">
                    {" "}
                    $ 59.99
                  </div>
                  <div>
                    <Button className="text-lg rounded-xl my-3 hover:scale-110 font-normal tracking-wide transition-all p-7">
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
