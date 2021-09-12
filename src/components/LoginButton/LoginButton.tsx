import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Button = () => {
	const { loginWithRedirect, isAuthenticated, loginWithPopup } = useAuth0()

	return (
		<button type="button" className="border-black border px-5 h-10" onClick={() => loginWithPopup()}>
			Войти
		</button>
	)
}

export default Button
