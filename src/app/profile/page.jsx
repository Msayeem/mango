"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfilePage = () => {

const { data: session } = authClient.useSession();
const user=session?.user;

    return (
 <div className=' '>
      <h1 className='text-2xl font-semibold lg:w-[70%] mt-5 w-[80%] mx-auto'>Profile</h1>
      <div className='flex justify-center my-15'>
  
         <div className='space-y-8'>
           <Image className='mx-auto rounded-full' src={user?.image} width={100} height={70} alt={user?.name}>
           </Image>

           <div className='text-[20px]'>
            <h1>Name : <span className='font-semibold'>{user?.name}</span></h1>
            <h1>Email : <span className='font-semibold'>{user?.email}</span></h1>

           </div>
           <div className='text-center'><Link className='btn btn-neutral' href={'/profile/update'}>Update</Link>
</div>
        </div>
   </div>
 </div>
    );
};

export default ProfilePage;