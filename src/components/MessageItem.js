import '../styles/MessageItem.css'

export default function MessageItem({ avatar, receiver, lastMessage, lastTimestamp }) {
  return (
    <div className='messageItem'>
      <div className='messageItem__info'>
        <img className='messageItem__avatar' src={avatar} alt=""/>
        <div className='messageItem__chat'>
          <h5>{receiver}</h5>
          <h6>{lastMessage}</h6>
        </div>
      </div>
      <h6 className='messageItem__timestamp'>{lastTimestamp}</h6>
    </div>
  )
}