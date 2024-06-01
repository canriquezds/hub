"use client"
import React, { useEffect, useState } from 'react'
import Input from './components/Input'
import { TbServerBolt, TbServerOff } from 'react-icons/tb';

export default function page() {
  const [backendAlive, setBackendAlive] = useState<boolean>(false);
  
  useEffect(() => {
    const checkBackendStatus = async () => {
      try {
        const response = await fetch('http://localhost:4000/up');
        if (response.ok) {
          setBackendAlive(true);
        } else {
          setBackendAlive(false);
        }
      } catch (error) {
        setBackendAlive(false);
      }
    };
    checkBackendStatus();
    const interval = setInterval(checkBackendStatus, 10000);
    return () => clearInterval(interval); 
  }, []);
  return (
    <div className='max-w-xl mx-auto border-r border-l min-h-screen'>
      <div className=' flex items-center  py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
        <div className='pr-1'>
          { backendAlive
            ? <TbServerBolt className='stroke-green-500' />
            : <TbServerOff className='stroke-red-500'/>
          }
        </div>
        <h2 className='text-lg sm:text-xl font-bold'>Fulcrum Engineering Hub</h2>
      </div>
      <Input />
    </div>
  )
}
