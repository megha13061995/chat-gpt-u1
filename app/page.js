"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import ChatInput from '../components/ChatInput'

function Homelayout() {
  const router = useRouter()

  const handleClick = (e, id) => {
    e.preventDefault()
    router.push(`/chat/${id}`)
  }
  return (
    <div>
      <div className='text-white flex flex-col items-center justify-center h-[530px] PX-2'>
        <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>


        <h2 className='mb-5'>Examples</h2>
        <div className='flex space-x-6 text-center'>
          <p onClick={(e) => handleClick(e, 1)} className='p-4 bg-gray-700/50 rounded-lg w-[300px]
        cursor-pointer
        hover:bg-gray-700 text-gray-300 transition-all 
        duration-200 ease-out'>Write an email from bullet list</p>
          <p onClick={(e) => handleClick(e, 2)} className='p-4 bg-gray-700/50 rounded-lg w-[300px]
        cursor-pointer
        hover:bg-gray-700 text-gray-300 transition-all 
        duration-200 ease-out'>Code a snake game</p>
          <p onClick={(e) => handleClick(e, 3)} className='p-4 bg-gray-700/50 rounded-lg w-[300px]
        cursor-pointer
        hover:bg-gray-700 text-gray-300 transition-all 
        duration-200 ease-out'>Markdown Text</p>
        </div>

      </div>
      <ChatInput />
    </div>

  )
}

export default Homelayout