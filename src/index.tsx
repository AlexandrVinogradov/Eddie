import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { getConfig } from './config'

const onRedirectCallback = (appState: any) => {
	// @ts-ignore
	// eslint-disable-next-line
	history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname)
}

const config = getConfig()

const providerConfig = {
	domain: config.domain,
	clientId: config.clientId,
	...(config.audience ? { audience: config.audience } : null),
	redirectUri: window.location.origin,
	// onRedirectCallback,

	// audience: 'https://dev-zuegt90n.us.auth0.com"/api/v2/',
	scope: 'read:current_user update:current_user_metadata',
	
}

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider 
		{...providerConfig}
		// domain="dev-zuegt90n.us.auth0.com"
		// clientId="PDTatsM23rJSnMKRHzr7TQzIYqqE8SfK"
		// redirectUri={window.location.origin}
		// audience="https://dev-zuegt90n.us.auth0.com/api/v2/"
		// scope="read:current_user update:current_user_metadata"
		>
			<App />
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
