import Image from "next/image";
import React from "react";
import midcoffee1 from "../../../public/img/midcoffee1.webp";
const BestSelling = () => {
  return (
    <div className="bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-3 gap-10">
          <div className="">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Image
                  src={midcoffee1}
                  alt="coffee-img"
                  height={600}
                  width={600}
                />
              </div>
              <div>
                {" "}
                <p> #Selling</p>
                <h2> Double Espresso</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequatur omnis quis vitae molestias, doloribus ratione
                  officia tempora, saepe impedit ea earum! Aspernatur
                  reprehenderit repellendus ipsum necessitatibus nesciunt
                  blanditiis, consequatur ex.
                </p>
              </div>
            </div>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
