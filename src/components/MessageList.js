import MessageItem from './MessageItem'
import myAvatar from '../imgs/myavatar.png'
import hisAvatar from '../imgs/hisavatar.png'
import '../styles/MessageList.css'

export default function MessageList() {
  return (
    <div className='messageList'>
      <MessageItem 
        avatar={hisAvatar}
        receiver='Will Smith'
        lastMessage={`Keep my wife's name out of your fucking mouth!`}
        lastTimestamp='9.17 PM'/>
      <hr />
    </div>
  )
}