"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import i1 from '../../public/user.png'
import i3 from '../../public/mango.png'
import { authClient } from '@/lib/auth-client';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {

  const router=useRouter();

  const path=usePathname();

  const { data: session } = authClient.useSession();
  const user=session?.user;

  const Links = () => {
    return(
    <>
     <li><Link className={`text-[18px] ${path==='/' && 'underline underline-offset-8 font-semibold text-amber-500'}`} href={'/'}>Home</Link></li> 
      <li><Link className={`text-[18px] ${path==='/allBooks' && 'underline underline-offset-8 font-semibold text-amber-500'}`} href={'/allBooks'}>All Books</Link></li> 
      <li><Link className={`text-[18px] ${path==='/profile' && 'underline underline-offset-8 font-semibold text-amber-500'}`} href={'/profile'}>Profile</Link></li> 
    </>
    )
  }

  return (
    <div>

      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
             <Links></Links>
            </ul>
          </div>
          <Link href={'/'}><Image src={i3} width={100} height={100} alt='mango'></Image></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <Links></Links>
          </ul>
        </div>
        <div className="navbar-end">
          <div className='flex items-center gap-5'>
            
           <div className='flex flex-col items-center gap-3'>
             <Image className='rounded-full' src={user?.image || i1} width={55} height={50} alt='user'></Image>
           <h1 className='font-semibold'>{user?.name}</h1>
           </div>
           {user ?  <button className='btn btn-error' onClick={async()=>{await authClient.signOut(); router.refresh();}}>Logout</button>: <Link className='btn btn-neutral' href={'/login'}>Login</Link>}
        </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;