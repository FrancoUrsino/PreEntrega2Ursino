// import React, {useState} from 'react'
import CartWidget from '../CartWidget'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import './NavBar.scss'

function NavBar() {

  // const[openMenu, setOpenMenu] = useState(false)

  // const toogleMenu = () => { setOpenMenu(!openMenu) }

  return (
    <div className='nav flex sticky top-0 backdrop-blur-md justify-between align-middle w-full bg-black/30 shadow-lg shadow-black/50 text-white text-xl  overflow-hidden'>
      <Link to="/"><img src={logo} alt=''className='nav__logo'/></Link>
      <button className='nav__menu'><i className='material-icons'>menu</i></button>
      <nav>
        <ul className='nav__list cursor-pointer p-5 m-0'>
          <li>
            <Link to="/" className='nav__links'>Inicio</Link>
          </li>
          <li>
            <Link to="/products" className='nav__links'>Productos</Link>
          </li>
          <li>
            <Link to="/contactus" className='nav__links'>Contactanos</Link>
          </li>
        </ul>
      </nav>
      <CartWidget/>
    </div>
  )
}

export default NavBar