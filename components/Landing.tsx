'use client'
import React, { useEffect, useState } from 'react'
import { Appbar } from './Appbar'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import styles from '@/app/styles/Landing.module.scss';


export const Landing = () => {
  
  const { data: session } = useSession(); // Get session data
  const user = session?.user; // Access user information from the session

  return (
    <div className='w-full text-white landing-page h-screen centered-div'>
        <div className='max-w-screen-lg mx-auto text-center pt-20 '>
        <h1 className={`text-5xl leading-normal font-bold intro-head  ${styles.customFont}`}>
          Stay Ahead of the Whale Moves on Solana
        </h1>
            <p className='text-xl px-16 font-semibold intro-description'>Get real-time notifications for large transactions on the Solana blockchain or for a specified solana address or a group of specified solana address.</p>
          
            {user?
            (
              <div className='mt-10'>
              <Link href={'/how-it-works'}><button type="button" className="text-gray-900 bg-white hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">How It Works</button></Link>
              <Link href={'dcex-tracker'}><button type="button" className="text-gray-900 bg-white hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Dcex Tracker</button></Link>
              </div>
            ):
            (
              <div className='mt-10'>
              <Link href={'/register'}><button type="button" className="text-gray-900 bg-white hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Get Started</button></Link>
              <Link href={'how-it-works'}><button type="button" className="text-gray-900 bg-white hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">How It Works</button></Link>
              </div>
            )
            }
            
            </div>
        </div>

  )
}
