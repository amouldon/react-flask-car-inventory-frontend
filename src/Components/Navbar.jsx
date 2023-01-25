import navbarBrand from '../assets/images/brand.jpg'
import { NavLink, Link } from 'react-router-dom'
import { useGetAuth } from '../useGetAuth';

const Navbar = () => {

    const {loggedInStatus} = useGetAuth()
    const logOut = () => {
        localStorage.clear()
    } 

  return (
    <div className="navbar">
        <Link to='/'><img src={navbarBrand} alt="car icon" id='nav-brand' /></Link>
        <div className="nav-items">
            <NavLink to='/' className='nav-item'>Home</NavLink>
            {!loggedInStatus ?
            <>
            <NavLink to='/sign-in' className='nav-item'>Sign in</NavLink>
            <NavLink to='/sign-up' className='nav-item'>Sign up</NavLink>
            </>:<>
            <NavLink to='/add' className='nav-item'>Add</NavLink>
            <NavLink to='/inventory' className='nav-item'>Inventory</NavLink>
            <a href='/' className='nav-item' onClick={logOut}>Logout</a>
            </>}
        </div>
    </div>
  )
}

export default Navbar