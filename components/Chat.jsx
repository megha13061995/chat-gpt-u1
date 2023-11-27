import React from 'react'
import Message from './Message'

function Chat({ message }) {
    return (
        <div className='flex-1 overflow-y-auto overflow-x-hidden'>
            {message.map((val) => 
                <Message data={val}/>
            )}
        </div>
    )
}

export default Chat