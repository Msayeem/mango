"use client"
import BookCard from '@/Components/BookCard';
import books from '../../../public/data.json';
import React, { useState } from 'react';

const AllBooksPage = () => {

const [filteredBooks, setFilteredBooks]=useState('');
const filtered=books.filter(b=> b.title.toLowerCase().includes(filteredBooks.toLowerCase().trim()))

    return (
       <div className='my-10 lg:w-[90%] w-[90%] mx-auto'>
        <div className='mb-10 flex items-center md:flex-row justify-between'>
            <h1 className=' text-3xl font-semibold'>
         All Books
        </h1>

        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" value={filteredBooks} onChange={(e)=> setFilteredBooks(e.target.value)} placeholder="Search by book title" />
</label>
        </div>
          <div className='flex items-center justify-between flex-wrap gap-5 w-[80%] mx-auto'>
            {
               filtered.length==0 ? <p className='my-20 mx-auto'>No results found</p>
               :
                filtered.map(book=>
                    <BookCard key={book.id} book={book}></BookCard>
                )
            }
        </div>
      </div>
    );
};

export default AllBooksPage;