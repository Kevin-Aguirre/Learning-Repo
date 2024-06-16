import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

const App = () => {
	return (
			<div>
				asd
				{/* <BrowserRouter>
					<Routes> 
						<Route path="/" element={<Navigate replace to="/login" />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Routes>
				</BrowserRouter> */}
			</div>
	)
}

export default App;
