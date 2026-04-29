import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='text-center space-y-8 text-white py-20 bg-amber-400 lg:w-[80%] w-[90%] mx-auto rounded-2xl my-5'>
            <h1 className='text-4xl font-bold'>Find Your Next Read</h1>
        <Link className='bg-amber-500 px-3.5 py-2.5 rounded-3xl' href={'/allBooks'}>Browse Now</Link>
        </div>
    );
};

export default Banner;