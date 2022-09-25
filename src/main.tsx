// Bootstrap stuff
import * as bootstrap from 'bootstrap'

// PartyTown (move blocking js onto another thread)
import { Partytown } from '@builder.io/partytown/react';

// React stuff
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
	Route,
  } from "react-router-dom";

// Other files
import './scss/styles.scss'

// Components
import Hero from './Hero'
import Creations from './Creations'
import Footer from './Footer'

function main() {
	return(
		<div className="px-4 py-5 text-center">
				<Hero/>
				<div className="dropdown-divider"></div>
				<Creations/>
			<Footer/>
		</div>
	)
}

const router = createBrowserRouter([
	{
		path: "/",
		element: main(),
	},
]);
  

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  	<React.StrictMode>
		<Partytown debug={true} forward={['dataLayer.push']} />
		<RouterProvider router={router} />
  	</React.StrictMode>
)
