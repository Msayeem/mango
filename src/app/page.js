import Banner from "@/Components/Banner";
import Fbooks from "@/Components/Fbooks";
import HowItWorks from "@/Components/HowItWorks";
import Marquee from "@/Components/Marquee";
import Testimonials from "@/Components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Banner></Banner>
    <Marquee></Marquee>
    <Fbooks></Fbooks>
    <HowItWorks></HowItWorks>
    <Testimonials></Testimonials>
  </div>
  );
}
