import { useState, useEffect, } from 'react'
import { useNavigate } from 'react-router-dom'

export const useGetAuth = () => {
    const [ loggedInStatus, setLoggedInStatus ] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const check = localStorage.getItem('token')
        if(check){
            setLoggedInStatus(true)}
        }, [navigate])
    return {loggedInStatus}
}
