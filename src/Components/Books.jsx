"use client"
import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';

const Books = ({book}) => {
    return (
        <div className='lg:flex-row items-center justify-between flex-col flex gap-20'>
               <div className='w-[400px]'>
        <Image src={book.image_url} className='mx-auto rounded-2xl' width={280} height={280} alt={book.title}></Image>
      </div>

      <div className='text-[20px] space-y-2'>
         <h1 className=''>Title : <span className='font-bold '>{book.title}</span></h1>
        <h1>Author : <span className='font-bold'>{book.author}</span></h1>
        <p>Description : <span className='font-bold'>{book.description}</span></p>
        <h1>Available Quantity : <span className='font-bold'>{book.available_quantity} copies left</span></h1>
        <h1>Category : <span className='font-bold'>{book.category}</span></h1>
      <button onClick={()=>toast.success('Book borrowed successfully!')} className='btn btn-primary w-full'>Borrow This Book</button>
      </div>
        </div>
    );
};

export default Books;