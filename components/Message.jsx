import React, { useState,useEffect } from 'react'
import ReactMarkdown from 'react-markdown';

function Message({data}) {

  const [chatLines, setChatLines] = useState([]);
  
  useEffect(() => {
    const dummyData = data.message.split(" ")
  const simulateStreaming = () => {
    dummyData.forEach((line, index) => {
      const delay = (index + 1) * 100;
      setTimeout(() => {
        setChatLines((prevLines) => {
          if (!prevLines.includes(line)) {
            return [...prevLines, line];
          }
          return prevLines;
        });
      }, delay);
    });
  };
  
  simulateStreaming();
  }, []);
  

  return (
    <div className={`py-2 text-white ${data.type==="ques" && "bg-[#434654]"}`}>
        <div className='flex space-x-5 px-10 mx-auto'>
            <img 
            src={data.type==="ans"?"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png":"data:image/jpeg;base64,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"} 
            className='h-8 w-8' 
            alt=""/>
            <p className='pt-1'>
               <ReactMarkdown>{data.type==="ques"?data.message:chatLines.join(' ')}</ReactMarkdown>
            </p>
        </div>
    </div>
  )
}

export default Message