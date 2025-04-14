import React from 'react'
import Footer from '../components/footer/Footer'
import ChatSlider from '../components/slider/ChatSlider'
import MessageList from '../components/chat/MessageList'
import ChatingArea from '../components/chat/ChatingArea'
import ChatSidebar from '../components/chat/ChatSidebar'

const ChatMainContent = () => {
  return (
    <div className="main-content">
        <div className="chatting-panel">
            <div className="d-flex">
                <div className="panel border-end rounded-0">
                    <div className="panel-body border-bottom">
                        <ChatSlider/>
                    </div>
                    <MessageList/>
                </div>
                <div className="panel rounded-0 position-relative">
                    <ChatingArea/>
                </div>
                <ChatSidebar/>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default ChatMainContent