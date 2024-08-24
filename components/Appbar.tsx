import Link from 'next/link'
import React from 'react';
import Image from 'next/image';

export const Appbar = () => {
  return (
    <div className='py-4  px-6  shadow-gray-00 shadow-md  header'>
        <div className='max-w-screen-xl mx-auto text-white flex justify-between items-center'>
            <div>
              
               <Image
               src="/solert.png" alt="logo" width="100" height="100"/>
             
            </div>
            <div className='text-lg'>
                <ul className='flex gap-8'>
                    <li><Link href={'/register'}>SignUp</Link></li>
                    {/* <li><Link href={'/whaleAlert'}>Whale Dcex</Link></li> */}
                    {/* <li><Link href={'/'}>About Us</Link></li> */}
                    {/* <li><Link href={'/'}>How it Works</Link></li> */}
                    <li>|</li>
                    <li><Link href={'/login'}>Login</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
