import React, { useState } from 'react'
import ReactPlayer from 'react-player'

// https://github.com/CookPete/react-player
// https://cookpete.com/react-player/

function Video() {
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
	return (
		<div>
			<input type="file" onChange={handleChange} accept="video/*" />
			<ReactPlayer url={videoURL} playing />
		</div>
	)
}

export default Video
