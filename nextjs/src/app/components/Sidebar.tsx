/* eslint-disable @next/next/no-img-element */
"use client"

import { signIn, signOut, useSession } from 'next-auth/react';
import { Session } from "next-auth";
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { HiHome, HiDotsHorizontal } from "react-icons/hi";


export default function Sidebar() {
  const [backendAlive, setBackendAlive] = useState<boolean>(false);
  const { data: session } = useSession() as { data: Session | null };

  return (
    <div className='flex flex-col p-3 justify-between h-screen'>
      <div className='flex flex-col gap-4 p-3'>
        <Image src="/assets/fulcrum_logo.png" width={165} height={44} alt="Loading" />
        <div className='flex items-center justify-start'>
          <Link href='/' className='flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit'>
            <HiHome className='w-7 h-7' />
            <span className='font-bold hidden xl:inline'>Home</span>
          </Link>
        </div>
      { session 
        ? <button className='bg-blue-400 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline'
        onClick={() => signOut()}
        >
          Sign Out
        </button>
        :<button className='bg-blue-400 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline'
        onClick={() => signIn()}
        >
          Sign In
        </button>
      }
      </div>
      {
        session && (
          <div className='text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200'>
            <img src={session?.user?.image ?? ''} alt='usr-img' className='h-10 w-10 rounded-full xl:mr-2'/>
            <div className='hidden xl:inline'>
              <h4 className='font-bold'>{session?.user?.name}</h4>
              <p className='text-gray-500'>@{session?.user?.username}</p>
            </div>
            <HiDotsHorizontal className='h-5 xl:ml-8 hidden xl:inline' />
          </div>
        )
      }
    </div>
  )
}

