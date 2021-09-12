import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { ArrowBack } from '../../icons/ArrowBack'
import SearchInput from '../SearchInput/SearchInput'
import LoginButton from '../LoginButton/LoginButton'
import LogoutButton from '../LogoutButton/LogoutButton'

const Header = () => {
	const { isAuthenticated, user } = useAuth0()

	return (
		<header className="flex justify-between shadow px-10 h-16 items-center">
			<ArrowBack className="w-24 pr-2" />
			<button type="button" className="pr-2">
				Категории
			</button>
			<SearchInput />
			<button type="button" className="pr-2 whitespace-nowrap">
				Преподавайте на Udemy
			</button>
			{isAuthenticated ? (
				<>
					<LogoutButton />
					{/* <div>
						<img src={user?.picture} alt={user?.name} />
						<h2>{user?.name}</h2>
						<p>{user?.email}</p>
					</div> */}
				</>
			) : (
				<LoginButton />
			)}
		</header>
	)
}

export default Header
