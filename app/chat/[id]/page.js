'use client'
import React, { useEffect, useState } from 'react'
import Chat from '../../../components/Chat'
import ChatInput from '../../../components/ChatInput'

function ChatPage(props) {
  const [message, setMessage] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (props?.searchParams?.param) {
          setMessage([{ type: "ques", message: props.searchParams.param }, { type: "ans", message: "I want to emphasize that this response is a dummy for reference purposes only. The content below is generated for testing and illustrative purposes.This is a simulated answer crafted for your inquiry. The content may not reflect real-time information, but it follows a structured format to provide you with a coherent response.  **Feel free to continue asking questions or seeking clarification on any topic.**" }])
        }
        else {
          const response = await fetch('/data.json');
          const json = await response.json();
          const data = json.data.filter(val => val.id.toString() === props.params.id)
          data.length && setMessage(data[0].message)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col overflow-hidden h-screen'>
      <Chat message={message} />
      <ChatInput addMessage={setMessage} />
    </div>
  )
}

export default ChatPage