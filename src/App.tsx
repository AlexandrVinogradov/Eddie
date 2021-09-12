import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './App.css'
import ReactPlayer from 'react-player'
import LoginButton from './components/LoginButton/LoginButton'
import LogoutButton from './components/LogoutButton/LogoutButton'
import Header from './components/Header/Header'

// https://github.com/CookPete/react-player
// https://cookpete.com/react-player/

function App() {
	const [videoURL, setVideoUrl] = useState<any>('')

	const handleChange = (event: any) => {
		const reader: any = new FileReader()
		const file = event.target.files[0]
		const url = URL.createObjectURL(file)

		reader.readAsDataURL(file)
		reader.onload = function () {
			setVideoUrl(url)
		}
	}

	// {
	// 	"sub": "google-oauth2|103567374479397212385",
	// 	"given_name": "ale.grapes",
	// 	"nickname": "ale.grapes.webdev",
	// 	"name": "ale.grapes",
	// 	"picture": "https://lh3.googleusercontent.com/a-/AOh14Ghwp0YZqlgQ6SYQbA7lSYV2lrwTe2YWleQ9XqL8=s96-c",
	// 	"locale": "ru",
	// 	"updated_at": "2021-08-30T10:19:26.305Z"
	//   }

	const { user, isAuthenticated, getAccessTokenSilently, getAccessTokenWithPopup, getIdTokenClaims } = useAuth0()
	console.log(user)
	// console.log(getAccessTokenSilently)
	// console.log(getAccessTokenWithPopup)
	// console.log(getIdTokenClaims)

	return (
		<div>
			<Header />

			{/* <input type="file" onChange={handleChange} accept="video/*" />
			<ReactPlayer url={videoURL} playing /> */}
		</div>
	)
}

export default App
