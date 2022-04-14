import React, { useState } from 'react'
import MessageLine from './MessageLine'
import '../styles/Chat.css'

export default function Chat() {
  const [input, setInput] = useState('')
  const [myMessages, setMyMessages] = useState([])
  const [hisMessages, sethisMessages] = useState([])

  function sendMessage() {
    setMyMessages([...myMessages, input])
    setInput('')
  } 

  return (
    <div className='chat'>
      <div className='typeArea'>
        <input
          className='typeArea__input'
          onKeyUp={e => {
            if (e.key === 'Enter') {
              if (input !== '') {
                sendMessage()
              }
            }
          }}
          value={input}
          placeholder='message'
          onChange={e => setInput(e.target.value)}
        />
      </div>

      {myMessages.map(message => (
        <MessageLine message={message} isMe={true} />
      ))}
    </div>
  )
}





