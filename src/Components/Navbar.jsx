"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import i1 from '../../public/user.png'
import i3 from '../../public/mango.png'
import { authClient } from '@/lib/auth-client';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/allBooks', label: 'All Books' },
    { href: '/profile', label: 'Profile' },
  ];

  const Links = () => (
    <>
      {navLinks.map(({ href, label }) => (
        <li key={href}>
          <Link
            className={`text-base sm:text-[18px] transition-colors ${
              path === href
                ? 'underline underline-offset-8 font-semibold text-amber-500'
                : 'hover:text-amber-500'
            }`}
            href={href}
          >
            {label}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-2 sm:px-4">

      {/* Left: Hamburger + Logo */}
      <div className="navbar-start gap-1">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-48 p-2 shadow"
          >
            <Links />
          </ul>
        </div>

        <Link href="/">
          <Image
            src={i3}
            width={100}
            height={100}
            alt="mango"
            className="w-16 md:w-24 h-auto"
          />
        </Link>
      </div>

      {/* Center: Desktop nav links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <Links />
        </ul>
      </div>

      {/* Right: User info + Auth button */}
      <div className="navbar-end">
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Username — hidden on very small screens */}
          {user?.name && (
            <span className="hidden sm:block font-semibold text-sm md:text-[18px] truncate max-w-[100px] md:max-w-[150px]">
              {user.name}
            </span>
          )}

          {/* Avatar */}
          <div className="avatar">
            <div className="w-8 sm:w-10 md:w-11 rounded-full ring ring-amber-400 ring-offset-base-100 ring-offset-1">
              <Image
                src={user?.image || i1}
                width={44}
                height={44}
                alt="user"
              />
            </div>
          </div>

          {/* Auth button */}
          {user ? (
            <button
              className="btn btn-error btn-sm sm:btn-md"
              onClick={async () => {
                await authClient.signOut();
                router.refresh();
              }}
            >
              <span className="hidden xs:inline">Logout</span>
              <span className="xs:hidden">
                {/* Logout icon for very small screens */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </span>
            </button>
          ) : (
            <Link className="btn btn-neutral btn-sm sm:btn-md" href="/login">
              Login
            </Link>
          )}
        </div>
      </div>

    </div>
  );
};

export default Navbar;