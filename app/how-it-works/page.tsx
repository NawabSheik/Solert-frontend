
'use client'
import React from 'react'
import { getServerSession } from 'next-auth'
import authOptions from '@/lib/authOption'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
// import { TrackAccount } from '@/components/trackAccount'
import styles from '@/app/styles/Landing.module.scss';
import {Accordion, AccordionItem} from "@nextui-org/react";

const page = () => {
  const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    

    <div className='w-full text-white landing-page h-screen'>
        <div className='max-w-screen-lg mx-auto text-center pt-20 '>
        <h1 className={`text-5xl leading-normal font-bold intro-head ${styles.customFont}`}>
          How The Solert Really Works
        </h1>
        </div>

       
        <div className="working-section mt-5">
       
        <div className="accordion-box">
      <h1 className='font-bold text-2xl text-left '>
      Monitoring the Solana Blockchain
      </h1>
      <p className='mt-3 font-semibold'>
      At the heart of our service lies a robust connection to the Solana Blockchain API. This direct link enables us to continuously scan the network for significant transactions. Whether it’s a sudden surge in activity or a large-scale movement of assets, our system is designed to detect and track these events in real-time, ensuring that nothing slips under the radar.
      </p>

      <hr className='mt-5 mb-5'/>

      <h1 className='font-bold text-2xl text-left '>
      Identifying Whale Transactions
      </h1>
      <p className='mt-3 font-semibold'>
      Our system is finely tuned to identify 'Whale Transactions'—those large, high-value transfers that can significantly impact the market. Upon detection, we dive deep into the transaction details, uncovering the signature that uniquely identifies the event. This allows us to track the transaction with precision, ensuring that our analysis is thorough and accurate.
      </p>

      <hr className='mt-5 mb-5'/>

      <h1 className='font-bold text-2xl text-left '>
      Deriving Affected Accounts
      </h1>
      <p className='mt-3 font-semibold'>
      The transaction signature is more than just a marker—it's a gateway to understanding the ripple effects of a transaction. We analyze this signature to derive the accounts impacted by the transaction. Whether it’s the sender, receiver, or any intermediary accounts, our system identifies them all, providing a clear picture of who is involved and how they are affected.
      </p>

      <hr className='mt-5 mb-5'/>

      <h1 className='font-bold text-2xl text-left '>
      Real-Time Notifications
      </h1>
      <p className='mt-3 font-semibold'>
      In the fast-paced world of blockchain, timing is everything. That’s why, as soon as we derive the affected accounts, we send you a detailed email notification. This includes the transaction details, involved accounts, and other pertinent information—all delivered to you in real-time, so you can stay ahead of the curve.
      </p>

      <hr className='mt-5 mb-5'/>

      

    </div>

        </div>
        
    </div>
  )
}

export default page