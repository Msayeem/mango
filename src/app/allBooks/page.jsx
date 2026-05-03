"use client"
import BookCard from '@/Components/BookCard';
import books from '../../../public/data.json';
import React, { useState } from 'react';
import Sidebar from '@/Components/Sidebar';

const AllBooksPage = () => {

  const [sort, setSort] = useState('all')

  const [filteredBooks, setFilteredBooks] = useState('');
  const filtered = books.filter(b => b.title.toLowerCase().includes(filteredBooks.toLowerCase().trim()))
  const story = filtered.filter(s => s.category == "Story")
  const tech = filtered.filter(s => s.category == "Tech")
  const science = filtered.filter(s => s.category == "Science")

  return (
    <div className='my-10 lg:w-[90%] w-[90%] mx-auto'>
      <div className='mb-3 flex items-center md:flex-row justify-between'>
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
          <input type="search" value={filteredBooks} onChange={(e) => setFilteredBooks(e.target.value)} placeholder="Search by book title" />
        </label>
      </div>

      <div className='flex justify-end mb-10'>
        <div>
          <div className="drawer">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-1" className="btn drawer-button">Sort</label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 min-h-full w-80 p-4">
                <label className='mb-7 text-[20px] font-medium'>Sort by book categories</label>
                <li><button onClick={() => setSort('all')}>All</button></li>
                <li><button onClick={() => setSort('story')}>Story</button></li>
                <li><button onClick={() => setSort('tech')}>Tech</button></li>
                <li><button onClick={() => setSort('science')}>Science</button></li>

              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {
          sort == 'all' ? filtered.map(book =>
            <BookCard key={book.id} book={book}></BookCard>
          ) :
            sort == 'story' ?
              story.map(book =>
                <BookCard key={book.id} book={book}></BookCard>
              ) :
               sort=='tech' ?
               tech.map(book=>
                    <BookCard key={book.id} book={book}></BookCard>)
                    :
                    science.map(book=>
                    <BookCard key={book.id} book={book}></BookCard>)
                

              }
      </div>
    </div>
  );
};

export default AllBooksPage;