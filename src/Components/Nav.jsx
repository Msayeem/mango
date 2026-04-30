"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import i1 from '../../public/user.png'
import { authClient } from '@/lib/auth-client';

const Nav = () => {

const { data: session } = authClient.useSession();
const user=session?.user;

    return (
       <nav className='flex justify-between items-center py-3 lg:w-[80%] w-[90%] mx-auto'>
        <Link href={'/'} className='text-2xl font-bold text-orange-200'>Mango</Link>

        <div className='flex items-center gap-5'>
            <Link href={'/'}>Home</Link>
            <Link href={'/allBooks'}>All Books</Link>
            <Link href={'/profile'}>Profile</Link>
        </div>

        <div className='flex items-center gap-3'>
            <Image className='rounded-full' src={user?.image??i1} width={60} height={50} alt='user'></Image>
           {user ?  <button className='btn btn-error' onClick={async()=>await authClient.signOut()}>Logout</button>: <Link className='btn btn-neutral' href={'/login'}>Login</Link>}
        </div>
       </nav>
    );
};

export default Nav;