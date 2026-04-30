import BookCard from '@/Components/BookCard';
import books from '../../../public/data.json';
import React from 'react';

const AllBooksPage = () => {
    return (
       <div className='my-10 lg:w-[90%] w-[90%] mx-auto'>
        <h1 className='mb-10 text-3xl font-semibold'>
         All Books
        </h1>
          <div className='flex items-center justify-between flex-wrap gap-5 w-[80%] mx-auto'>
            {
                books.map(book=>
                    <BookCard key={book.id} book={book}></BookCard>
                )
            }
        </div>
      </div>
    );
};

export default AllBooksPage;