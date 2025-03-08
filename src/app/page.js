import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import OrderCoffee from "./components/OrderCoffee";
import BestSelling from "./components/BestSelling";
export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Explore />
      <OrderCoffee />
      <BestSelling/>
    </div>
  );
}
