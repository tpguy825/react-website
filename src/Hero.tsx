import { useState } from 'react'
import Icon from "./assets/icon.webp"


/**
 * This shows my profile picture and a hello message
 */
function Hero() {
	return (
		<div>
			<img width="150px" height="150px" alt="My logo" className="rounded-circle" src={Icon} />
			<h1 className="display-5 fw-bold">Hello!</h1>
			<p>Hello, and welcome to my website!</p>
		</div>
	)
}

export default Hero
