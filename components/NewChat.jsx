'use client';
import React from 'react'
import { useRouter } from 'next/navigation'


function NewChat() {
   const router = useRouter();
    const handleClick=async()=>{
        router.push('/')
    }
  return (
    <div className='flex'>
    <img className='h-10 w-10 mr-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png"/>
    <div className='p-2 border-grey-700 border rounded-lg cursor-pointer
         hover:bg-gray-700/70 text-gray-300 transition-all 
         duration-200 ease-out text-center flex-1' onClick={handleClick}>
        <p>New chat</p>
        </div></div>
  )
}

export default NewChat