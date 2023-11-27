"use client"
import { useState, useEffect} from "react";
import ChatRow from "./ChatRow"
import NewChat from "./NewChat"
import { useSearchParams } from "next/navigation";

function Sidebar(props) {
  const [jsonData, setJsonData] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  if (!jsonData) {
    return <div className="text-white">Loading...</div>;
  }
  return (
    <div className="p-2 flex flex-col h-screen w-[300px]">
        <div className="flex-1">
            <div>
            <NewChat/>
            {jsonData.data.map((chat)=>
                <ChatRow key={chat.id} text={chat.text} id={chat.id}/>
            )} 
             {searchParams && <ChatRow key={4} text={searchParams[1]} id={4}/>}
            </div>
       
        </div>
        <div className="cursor-pointer mb-4 ml-3 text-gray-300 ">
            <p className="hover:opacity-50 mb-3" >Login</p>
            <p className="hover:opacity-50 mb-3">Theme</p>
            <p className="hover:opacity-50 mb-3">Settings</p>
            <p className="hover:opacity-50 mb-3">Feedbacks</p>
        </div>
    </div>
  )
}

export default Sidebar