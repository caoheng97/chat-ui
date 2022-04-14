import myAvatar from '../imgs/myavatar.png'
import hisAvatar from '../imgs/hisavatar.png'
import '../styles/MessageLine.css'

export default function MessageLine({ message, isMe }) {
  if (isMe) {
    return (
      <div className='messageline'>
        <div className='message message-me'>
          <Message message={message}/>
        </div>
        <img 
          className='messageline__avatar messageline-me'
          src={myAvatar} 
          alt='me'
        />
      </div>
    )
  } else {
    return (
      <div className='messageline messageline-notme'>
        <img 
          className='messageline__avatar'
          src={hisAvatar} 
          alt='me'
        />
        <div className='message message-notme'>
          <Message message={message}/>
        </div>
      </div> 
    )
  }
}

function Message({ message }) {
  return (
    <div className='message'>
      <p>{message}</p>
    </div>
  )
}