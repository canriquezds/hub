'use client'

import React from 'react'
import { HiOutlineChat, HiOutlineHeart, HiOutlineTrash } from 'react-icons/hi'
import { CgLoadbarSound } from "react-icons/cg";
import { IoBookmarkOutline } from "react-icons/io5";



export default function IconActions() {
  return (
    <div className='flex justify-start gap-5 p-2 text-gray-500'>
      <HiOutlineChat className='h-8 w-8 cursor-pointer rounded-full transition
      duration-200 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100'/>
      <HiOutlineHeart className='h-8 w-8 cursor-pointer rounded-full transition
      duration-200 ease-in-out p-2 hover:text-red-500 hover:bg-red-100'/>
      <CgLoadbarSound className='h-8 w-8 cursor-pointer rounded-full transition
      duration-200 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100'/>
      <IoBookmarkOutline className='h-8 w-8 cursor-pointer rounded-full transition
      duration-200 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100'/>
    </div>
  )
}
