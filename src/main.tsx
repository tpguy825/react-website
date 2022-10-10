// Bootstrap stuff
import * as bootstrap from 'bootstrap'

// PartyTown (move blocking js onto another thread)
import { Partytown } from '@builder.io/partytown/react';

// React stuff
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Other files
import './scss/styles.scss'

// Components
import Head from './Head'
import Hero from './Hero'
import Creations from './Creations'
import Footer from './Footer'
import Error from './ErrorPage'

function Main() {
	return(
		<div className="main px-4 text-center">
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
		element: <Main />,
		errorElement: <Error />,
	}
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("head") as HTMLElement).render(<Head partytown={Partytown}/>)