import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
       <nav className='flex justify-between items-center py-3 lg:w-[80%] w-[90%] mx-auto'>
        <Link href={'/'} className='text-2xl font-bold text-orange-200'>Mango</Link>

        <div className='flex items-center gap-5'>
            <Link href={'/'}>Home</Link>
            <Link href={'/allBooks'}>All Books</Link>
            <Link href={'/profile'}>Profile</Link>
        </div>

        <Link href={'/login'}>Login</Link>
       </nav>
    );
};

export default Nav;