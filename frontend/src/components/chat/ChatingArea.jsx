import React from 'react'
import ChatTopBar from './ChatTopBar'
import MessageArea from './MessageArea'
import MessageInput from './MessageInput'

const ChatingArea = () => {
  return (
    <div className="chatting-area">
        <ChatTopBar/>
        <MessageArea/>
        <MessageInput/>
    </div>
  )
}

export default ChatingArea