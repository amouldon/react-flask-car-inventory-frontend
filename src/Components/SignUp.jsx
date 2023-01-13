import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const SignUp = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const {email, password, confirmPassword} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const onSubmit = async () => {
        if(password == confirmPassword){
        const response = await fetch('https://car-inventory-react-flask-backend.glitch.me/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json()
        console.log(data)
        if (data.token){
            localStorage.setItem('token', data.token)
            navigate('/')
        }
        else if (data.message == 'email is in use') {toast.error('Email is already taken')}
        else {toast.error('Invalid input')}
        } else {
            toast.error('Passwords do not match')
        }}

  return (
    <div className='flex-col'>
        <h1 className='text-light'>Sign up</h1>
        <div className="container-gray width-50">
            <div className='flex-col'>
                <i className="fa-solid fa-envelope fa-2xl"></i>
                <input className='form' type="text" id="email" placeholder='Enter email' onChange={onChange} value={email}/>
                <i className="fa-solid fa-lock fa-2xl"></i>
                <input className='form' type="text" id="password" placeholder='Enter password' onChange={onChange} value={password}/>
                <i className="fa-solid fa-key fa-2xl"></i>
                <input className='form' type="text" id="confirmPassword" placeholder='Confirm password' onChange={onChange} value={confirmPassword}/>
                <div>
                    <button onClick={onSubmit} className="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp