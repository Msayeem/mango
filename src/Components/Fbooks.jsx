import React from 'react';
import books from '../../public/data.json';
import BookCard from './BookCard';


const Fbooks =() => {

    return (
      <div className='my-10 lg:w-[70%] w-[85%] mx-auto'>
        <h1 className='mb-10 text-3xl font-semibold'>
            Featured Books
        </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {
                books.slice(0, 4).map(book=>
                    <BookCard key={book.id} book={book}></BookCard>
                )
            }
        </div>
      </div>
    );
};

export default Fbooks;