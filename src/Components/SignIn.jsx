import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const SignIn = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const onSubmit = async () => {
        const response = await fetch('https://car-inventory-react-flask-backend.glitch.me/sign-in', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json()
        if (data.token){
            localStorage.setItem('token', data.token);
            navigate('/')
        } else {
            toast.error('Invalid credentials')
        }
    }

    return (
      <div className='flex-col'>
          <h1 className='text-light'>Sign up</h1>
          <div className="container-gray width-50">
              <div className='flex-col'>
                  <i className="fa-solid fa-envelope fa-2xl"></i>
                  <input className='form' type="text" id="email" placeholder='Enter email' onChange={onChange} value={email}/>
                  <i className="fa-solid fa-lock fa-2xl"></i>
                  <input className='form' type="password" id="password" placeholder='Enter password' onChange={onChange} value={password}/>
                  <div>
                      <button className="submit" onClick={onSubmit}> Submit</button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default SignIn