
import '../styles/FriendItem.css'

export default function FriendItem({ avatar, name }) {
  return (
    <div className='friendItem'>
      <img className='friendItem__avatar' src={avatar} alt=''/>
      <h5>{name}</h5>
    </div>
  )
}