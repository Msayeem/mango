import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import i1 from '../../public/user.png'

const Nav = () => {
    return (
       <nav className='flex justify-between items-center py-3 lg:w-[80%] w-[90%] mx-auto'>
        <Link href={'/'} className='text-2xl font-bold text-orange-200'>Mango</Link>

        <div className='flex items-center gap-5'>
            <Link href={'/'}>Home</Link>
            <Link href={'/allBooks'}>All Books</Link>
            <Link href={'/profile'}>Profile</Link>
        </div>

        <div className='flex items-center gap-3'>
            <Image src={i1} width={50} alt='user'></Image>
            <Link href={'/login'}>Login</Link>
        </div>
       </nav>
    );
};

export default Nav;