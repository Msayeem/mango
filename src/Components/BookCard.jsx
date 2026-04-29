import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({book}) => {
    return (
        <div className='w-[300px] space-y-2 hover:scale-105 transition-all p-3 rounded-2xl bg-orange-100'>
            <Image className=' mx-auto rounded-2xl' src={book.image_url} width={280} height={200} alt={book.title}></Image>
        <h1 className='mt-5'>Name : <span className='font-medium text-[18px]'>{book.title}</span></h1>
        <h1>Author : <span className='font-medium text-[18px]'>{book.author}</span></h1>
        <h1>In stock : <span className='font-medium text-[18px]'>{book.available_quantity}</span></h1>
        <Link className='btn flex' href={`/bookDetails/${book.id}`}>View Details</Link>
        </div>
    );
};

export default BookCard;