import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({book}) => {
    return (
<div className='rounded-b-3xl hover:shadow-xl hover:bg-amber-50 hover:scale-105 transition-all duration-300'>
    <div className="card  rounded-3xl w-96 shadow-xl ">
  <figure className='h-70'>
    <Image className='rounded-2xl hover:scale-110 transition-transform duration-300' src={book.image_url} width={160} height={100} alt={book.title}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{book.title}</h2>
    <p>Category : {book.category}</p>
    <div className="card-actions justify-end">
       <Link
      className="btn btn-neutral w-full mt-4 rounded-xl hover:scale-[1.02] transition-all"
      href={`/bookDetails/${book.id}`}
    >
      View Details
    </Link>
    </div>
  </div>
</div>
</div>
    );
};

export default BookCard;