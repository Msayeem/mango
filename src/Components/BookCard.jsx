import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({book}) => {
    return (
        <div className='w-[300px] space-y-2 hover:scale-105 transition-all p-3 rounded-2xl bg-orange-100'>
            <Image className=' mx-auto rounded-2xl' src={book.image_url} width={280} height={200} alt={book.title}></Image>
       
       <div className='space-y-2'>
         <h1 className='mt-5'>Title : <span className='font-medium text-[18px]'>{book.title}</span></h1>
        <h1>Category : <span className='font-medium text-[18px]'>{book.category}</span></h1>
        <h1>Available Quantity : <span className='font-medium text-[18px]'>{book.available_quantity} copies left</span></h1>
        <Link className='btn flex mt-5' href={`/bookDetails/${book.id}`}>View Details</Link>
       </div>
        </div>
    );
};

export default BookCard;