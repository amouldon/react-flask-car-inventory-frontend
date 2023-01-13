import Car from "./Car"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Spinner from "./Spinner"

const Inventory = () => {
    const [loading, setLoading] = useState(true)
    const [cars, setCars] = useState('')

    useEffect(() => {
        getCars()
    }, [])

    const getCars = async () => {
        const token = localStorage.getItem('token');
        const response = await fetch('https://car-inventory-react-flask-backend.glitch.me//api/view-collection', {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
        const data = await response.json()
        console.log(data)
        setCars(data)
        setLoading(false)
    }
if (loading){return ( <Spinner /> )}
else {

  return (
    <div className="flex-col">
        <h1 className="page-header">My inventory</h1>
        <div className="container-gray width-90 flex-row">
        {cars.message == 'no cars found' ? <h1 className="text-center">No cars found</h1>
        :
        cars.map((car) => (
            <Car id={car.id} brand={car.brand} year={car.year} model={car.model} color={car.color} />
        ))
        }
        </div>
    </div>
  )
}}

export default Inventory