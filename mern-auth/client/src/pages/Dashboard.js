import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom' // Import useNavigate instead of useHistory

const Dashboard = () => {
    const navigate = useNavigate(); // use useNavigate here
    const [quote, setQuote] = useState('')
    const [tempQuote, setTempQuote] = useState('')


     async function populateQuote() {
        const req = await fetch('http://localhost:8080/api/quote', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })

        const data = await req.json()
        if (data.status === 'ok') {
            setQuote(data.quote)
        } else {
            alert(data.error)
        }
    }

    useEffect(() => { // runs onyl 
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwtDecode(token)
            if (!user) {
                localStorage.removeItem('token')
                navigate('/login') // use navigate instead of history.replace
            } else {
                populateQuote()
            }
        } else {
            navigate('/login') // Redirect to login if there's no token
        }
    }, []) // Add navigate to the dependency array

    async function updateQuote(event)
    {
        event.preventDefault()
        const req = await fetch('http://localhost:8080/api/quote', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                quote: tempQuote
            })
        })

        const data = await req.json()
        if (data.status === 'ok') {
            setTempQuote('')
            setQuote(tempQuote)
        } else {
            alert(data.error)
        }
    }

    return (
        <div>

        </div>
    )
}

export default Dashboard;
