import React from 'react'
import {ChatBubbleLeftIcon, TrashIcon} from '@heroicons/react/24/outline';
import Link from "next/link";

function ChatRow({text,id}) {
  return (
    <Link href={`/chat/${id}`} className='flex text-gray-300 justify-center mt-4'>
        <ChatBubbleLeftIcon className='h-4 w-4 mt-1'/>
        <p className='px-2 truncate flex-1'>{text}</p>
    </Link>
  )
}

export default ChatRow

