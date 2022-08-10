import './Navbar.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
      <span className='logo'>HoneyMoonBooking</span>
      <div className='navItems'>
        <button className='navButtonRegister'><Link className='registerLink' to="register">Register</Link></button>
        <button className='navButtonLogin'><Link className='registerLink' to="login">Login</Link></button>
        <button className='navButtonProfile'><FontAwesomeIcon className='registerLink' icon={faUserCircle} />
        
        </button>
      </div>
      </div>
    </div>
  )
}

export default Navbar;