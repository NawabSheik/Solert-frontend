'use client'

import Link from 'next/link'
import React, { useState } from 'react';
import Image from 'next/image';
import Login from '@/app/login/page';
import { signOut, useSession } from 'next-auth/react';

export const Appbar = () => {

  const { data: session } = useSession(); // Get session data
  const user = session?.user; // Access user information from the session
  console.log(" more thime ", session);


  return (
    <div className='py-4  px-6  shadow-gray-00 shadow-md  header'>

      <div className='max-w-screen-xl mx-auto text-white flex justify-between items-center'>
        <div>

          <Image
            src="/solert.png" alt="logo" width="100" height="100" />

        </div>
        <div className='text-lg'>

          {user ? (

        <div className='max-w-screen-xl mx-auto text-white flex justify-between items-center'>
            <div>
              <Link href='/'>
               <Image
               src="/solert.png" alt="logo" width="100" height="100"/>
               </Link>
           
            </div>
            <div className='text-lg'>

              {user?(
               <ul className='flex gap-8'>

               {/* <li><Link href={'/whaleAlert'}>Whale Dcex</Link></li> */}
               {/* <li><Link href={'/'}>About Us</Link></li> */}
               {/* <li><Link href={'/'}>How it Works</Link></li> */}
              
               <li className='nav-link'>
                  <button onClick={() => signOut()}>Logout</button>
               </li>
           </ul>
           )
            :(
            <ul className='flex gap-8'>
              <li className='nav-link'>Welcome</li>
              {/* <li><Link href={'/whaleAlert'}>Whale Dcex</Link></li> */}
              {/* <li><Link href={'/'}>About Us</Link></li> */}
              {/* <li><Link href={'/'}>How it Works</Link></li> */}
              <li>|</li>
              <li className='nav-link'>
                <button onClick={() => signOut()}>Logout</button>
              </li>
            </ul>
          )
            : (
              <ul className='flex gap-8'>
                <li className='nav-link'><Link href={'/register'}>SignUp</Link></li>
                {/* <li><Link href={'/whaleAlert'}>Whale Dcex</Link></li> */}
                {/* <li><Link href={'/'}>About Us</Link></li> */}
                {/* <li><Link href={'/'}>How it Works</Link></li> */}
                <li>|</li>
                <li className='nav-link'><Link href={'/login'}>Login</Link></li>
              </ul>
            )}
        </div>
      </div>
    </div>
  )
}
