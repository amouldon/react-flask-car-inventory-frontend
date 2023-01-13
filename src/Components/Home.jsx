import homeCar from '../assets/images/CarHome.png'
import { Link } from 'react-router-dom'

const Home = () => {
    const token = localStorage.getItem('token');
  return (
    <div className="flex-row">
        <div className="container-gray text-center width-40">
            <h1>Car Inventory</h1>
            {token ? <>
            <Link to='/add' type='button' className="home-btn nav-item"> Add cars </Link>
            <Link to='inventory' type='button' className="home-btn nav-item"> My inventory </Link>
            </>:<>
            <Link to='/sign-in' type='button' className="home-btn nav-item"> Sign in </Link>
            <Link to='sign-up' type='button' className="home-btn nav-item"> Sign up </Link>             
            </>}
        </div>
        <div className='car-bg'>
            <img src={homeCar} alt="car vector" className='car-img' />
        </div>
    </div>
  )
}

export default Home
