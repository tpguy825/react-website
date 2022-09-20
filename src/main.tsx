// Bootstrap stuff
import 'bootstrap-icons/font/bootstrap-icons.css'
import * as bootstrap from 'bootstrap'

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
		<RouterProvider router={router} />
  	</React.StrictMode>
)
