import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import MessageList from './MessageList'
import FriendList from './FriendList'
import '../styles/Sidebar.css'

export default function Sidebar() {
  const [isChat, setIsChat] = useState(true)

  return (
    <div className='sidebar'>
      <NavigationBar 
        isChat={isChat} 
        handleClickOption={(isSelected) => {
          if (!isSelected) {
            setIsChat(!isChat)
          }
        }}
      />
      {isChat? <MessageList /> : <FriendList/>}
    </div>
  )
}
