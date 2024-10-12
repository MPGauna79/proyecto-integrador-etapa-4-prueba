import menuItems from "../constants/menuItems"
import NavItem from "./NavItem"

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <img className="nav-bar__logo-container" src="public/img/LOGO.png" />
      <ul className="nav-bar__nav-list">

        {
         menuItems.map( item => (
          <NavItem item={item} key={item.id} />
         )) 
        }
       
        
      </ul>
    </nav> 


  )
}

export default Navbar