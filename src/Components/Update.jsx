import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import defaultCar from '../assets/images/CarHome.png'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


const Update = () => {
    const navigate = useNavigate()
    const {handle} = useParams()
    const [formData, setFormData] = useState({})
    
    const {brand, model, year, color} = formData

    useEffect(() => {
        console.log(handle)
        getCar(handle)
    }, [handle])

    const getCar = async (id) => {
        const token = localStorage.getItem('token');
        console.log(id)
        const response = await fetch(`https://car-inventory-react-flask-backend.glitch.me/api/view-car/${id}`, {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
        const data = await response.json()
        console.log(data)
        setFormData(data)
    }
    
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

    const onSave = async (id) => {
        const token = localStorage.getItem('token')
        const response = await fetch(`https://car-inventory-react-flask-backend.glitch.me/api/update/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json()
        if (data.message == 'invalid'){
            toast.error('Please fill in all fields')
        } else{
            navigate('/inventory')
            toast.success('Car updated')
        }
    } 

    const deleteCar = async (id) => {
        const token = localStorage.getItem('token')
        await fetch(`https://car-inventory-react-flask-backend.glitch.me/api/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        }) 
        navigate('/inventory')
        toast.success('Car deleted')
    }

  return (
    <div className="flex-row width-100 max-height">
        <div className='flex-col container-gray width-50'>
            <i className="fa-solid fa-gears fa-2xl"></i>
            <input className='form' type="text" id="brand" onChange={onChange} defaultValue={brand}/>
            <i className="fa-solid fa-car-side fa-2xl"></i>
            <input className='form' type="text" id="model"  onChange={onChange} defaultValue={model}/>
            <i class="fa-solid fa-calendar fa-2xl"></i>
            <input className="form" type="text" id="year" onChange={onChange} defaultValue={year}/>
            <div>
                <button className="submit" onClick={() => onSave(handle)}> Save</button>
                <button className="delete" onClick={() => deleteCar(handle)}> Delete</button>
            </div>
        </div>
        <div className="flex-col container-gray width-43">
            <div className="text-center img-container">
                <img src={defaultCar} className='user-img default-img' style={{backgroundColor: color}}/>
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

export default Update