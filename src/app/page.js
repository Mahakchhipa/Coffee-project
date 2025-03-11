import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import OrderCoffee from "./components/OrderCoffee";
import BestSelling from "./components/BestSelling";
import Instant from "./components/Instant";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Explore />
      <OrderCoffee />
      <BestSelling />
      <Instant />
      <Testimonial />
    <Footer/>
    </div>
  );
}
