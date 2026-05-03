import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const Banner = () => {
    return (
<div className='lg:w-[80%] w-[90%] mx-auto my-15 animate__animated animate__fadeInDown'>

         <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
  
  <Image
    src="/bg.svg"
    alt="background"
    fill
    className="object-cover"
  />

  <div className="text-center absolute inset-0 flex flex-col items-center justify-center text-white">
    <h1 className="md:text-4xl sm:text-3xl mb-3 font-bold">Find Your Next Read</h1>
    <Link href="/allBooks" className="mt-4 bg-amber-600 px-4 py-2 rounded-3xl hover:scale-105 duration-300 transition-transform">
      Browse Now
    </Link>
  </div>

</div>
</div>
    );
};

export default Banner;