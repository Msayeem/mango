import Banner from "@/Components/Banner";
import Fbooks from "@/Components/Fbooks";
import Marquee from "@/Components/Marquee";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Banner></Banner>
    <Marquee></Marquee>
    <Fbooks></Fbooks>
  </div>
  );
}
