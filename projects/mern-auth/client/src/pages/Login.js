import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const navigate = useNavigate()

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:8080/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
      console.log('as');
			localStorage.setItem('token', data.user)
			alert('Login successful')
			navigate('/dashboard')
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Login" />
			</form>
		</div>
	)
}

export default App