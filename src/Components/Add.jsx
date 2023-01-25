import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import defaultCar from '../assets/images/CarHome.png'
import { toast } from "react-toastify"


const Add = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        carBrand: '',
        model: '',
        year: '',
        color: ''
    })
    
    const {brand, model, year} = formData
    
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const onClickColor = () => {
        const uglyColor = document.getElementById('color')
        uglyColor.click()
    }

    const addCar = async () => {
        if (brand && model && year){
        const token = localStorage.getItem('token')
        const response = await fetch('https://car-inventory-react-flask-backend.glitch.me/api/add-car', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json()
        console.log(data)
        navigate('/inventory')
        toast.success('Car added')
    } else {
        toast.error('Please fill in all fields')
    }
    }

  return (
    <div className="flex-row width-100 max-height">
        <div className='flex-col container-gray width-50'>
            <i className="fa-solid fa-gears fa-2xl"></i>
            <input className='form' type="text" id="brand" placeholder="Enter the car's brand" onChange={onChange} value={brand}/>
            <i className="fa-solid fa-car-side fa-2xl"></i>
            <input className='form' type="text" id="model" placeholder="Enter the model of the car" onChange={onChange} value={model}/>
            <i class="fa-solid fa-calendar fa-2xl"></i>
            <input className="form" type="text" id="year" placeholder="Enter the car's year" onChange={onChange} value={year}/>
            <div>
                <button className="submit" onClick={addCar}> Save</button>
            </div>
        </div>
        <div className="flex-col container-gray width-43">
            <div className="text-center img-container">
                <img src={defaultCar} className='user-img default-img' style={{backgroundColor: formData.color}}/>
            </div>
            <div>
                <div className="color-select" onClick={onClickColor}>
                    <input type="color" id='color' onChange={onChange}/>
                    <i class="fa-solid fa-droplet fa-2xl"></i>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Add