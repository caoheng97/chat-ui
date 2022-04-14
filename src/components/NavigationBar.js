import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NaviOption from './NaviOption'
import '../styles/NavigationBar.css'

export default function NavigationBar({ isChat, handleClickOption }) {

  return (
    <div className='navbar'>
      <NaviOption 
        handleClick={handleClickOption}
        Icon={PeopleOutlineIcon} 
        title='Friends' 
        selected={!isChat}/>

      <NaviOption 
        handleClick={handleClickOption}
        Icon={ChatBubbleOutlineIcon} 
        title='Messages' 
        selected={isChat}/>      
    </div>
  )
}