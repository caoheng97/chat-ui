
import '../styles/NaviOption.css'

export default function NaviOption({ Icon, title, selected, handleClick }) {
  return (
    <div 
      className={`navbar__option ${selected && 'selected'}`}
      onClick={() => handleClick(selected)}>

      <Icon fontSize='large'/>
      <h3>{title}</h3>
    </div>
  )
}