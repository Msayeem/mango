import React from 'react';
import books from '../../public/data.json';
import BookCard from './BookCard';


const Fbooks =() => {

    return (
      <div className='my-10 lg:w-[90%] w-[90%] mx-auto'>
        <h1 className='mb-10 text-3xl font-semibold'>
            Featured Books
        </h1>
          <div className='flex items-center justify-between flex-wrap gap-5 w-[80%] mx-auto'>
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