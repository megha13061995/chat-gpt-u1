'use client'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function ChatInput({addMessage}) {
    const[inputValue,setInputValue]=useState("")
    const router = useRouter()

    const sendMessage= (e)=>{
        e.preventDefault()
        if(!inputValue) return
        const input = inputValue.trim()
        !addMessage && router.push(`/chat/4?param=${input}`)
        setInputValue("")
        
        //call api and send input data
        addMessage && addMessage((prev)=>[...prev,{type:"ques",message:input}, {type:"ans",message:"This is a sample answer"}])

    }
  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg'>
        <form onSubmit={sendMessage} className='p-5 space-x-5 flex'>
            <input className='bg-transparent flex-1 focus:outline-none' value={inputValue} onChange={e=>setInputValue(e.target.value)} type='text' placeholder='Ask anything'/>
            <button 
            disabled={!inputValue} 
            className='bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded 
            disabled:bg-gray-300 disabled:cursor-not-allowed'
            type="submit">
                <PaperAirplaneIcon className='h-4 w-4 -rotate-45'/></button>
        </form>
    </div>
  )
}

export default ChatInput