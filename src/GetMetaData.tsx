import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getConfig } from './config'

const GetMetaData = () => {
	const { user, getAccessTokenSilently } = useAuth0()
	const config = getConfig()

	const [userMetadata, setUserMetadata] = useState(null)
	console.log('metaData \n', userMetadata)
	console.log('user \n', user)

	// useEffect(() => {
	// 	const getUserMetadata = async () => {
	// 		if (user) {
	// 			const { domain } = config

	// 			try {
	// 				const accessToken = await getAccessTokenSilently({
	// 					audience: `https://${domain}/api/v2/`,
	// 					scope: 'read:current_user',
	// 				})

	// 				const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`

	// 				const metadataResponse = await fetch(userDetailsByIdUrl, {
	// 					headers: {
	// 						Authorization: `Bearer ${accessToken}`,
	// 					},
	// 				})

	// 				const user_metadata = await metadataResponse.json()

	// 				setUserMetadata(user_metadata)
	// 			} catch (e: any) {
	// 				console.log(e.message)
	// 			}
	// 		}
	// 	}

	// 	getUserMetadata()
	// }, [getAccessTokenSilently, user?.sub])

	return <div>1</div>
}

export default GetMetaData
