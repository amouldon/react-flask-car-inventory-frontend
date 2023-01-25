import Icon from '../assets/images/maybe.png'
import { Link } from 'react-router-dom'

const Car = ({id, brand, model, year, color}) => {

  return (
    <div className="car-card flex-col-left">
        <div style={{backgroundColor: color}}>
            <img src={Icon} alt="car" class='car-img' style={{backgroundColor: color}}/>
        </div>
        <Link to={`/edit/${id}`} className='pencil'>
            <i className="car-label fa-solid fa-pencil" ></i>
        </Link>
        <div className='display-info info-text'>
            <h4 className='car-label'>Brand:</h4>
            <span>{brand}</span>
        </div>
        <div className='display-info info-text'>
            <h4 className='car-label'>Model:</h4>
            <span>{model}</span>
        </div>
        <div className='display-info info-text'>
            <h4 className="car-label">Year:</h4>
            <span>{year}</span>
         </div>
    </div>
  )
}

export default Car