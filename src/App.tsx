import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './App.css'
import LoginButton from './components/LoginButton/LoginButton'
import LogoutButton from './components/LogoutButton/LogoutButton'
import Header from './components/Header/Header'
import { getConfig } from './config'
import { useApi } from './use-api'

function App() {
	const backendUrl = 'https://google.com/'

	const config = getConfig()
	const { audience } = config

	const opts = {
		audience,
		// scope: 'read:users',
		method: 'GET',
		// mode: 'no-cors',
	}

	const { loading, error, refresh, data } = useApi(backendUrl, opts)
	console.log('data: \n', data)
	console.log('error: \n', error)

	return (
		<div>
			<Header />
		</div>
	)
}

export default App
