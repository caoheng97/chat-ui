import FriendItem from './FriendItem'
import myAvatar from '../imgs/myavatar.png'
import hisAvatar from '../imgs/hisavatar.png'
import '../styles/FriendList.css'

export default function FriendList() {
  return (
    <div className='friendList'>
      <FriendItem avatar={myAvatar} name='You'/>
      <hr />
      <FriendItem avatar={hisAvatar} name='Will Smith'/>
    </div>
  )
}