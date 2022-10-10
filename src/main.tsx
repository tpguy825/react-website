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
const Head = lazy(() => import('./Head'))
const Hero = lazy(() => import('./Hero'))
const Creations = lazy(() => import('./Creations'))
const Footer = lazy(() => import('./Footer'))
const Error = lazy(() => import('./ErrorPage'))

function Main() {
	return(
		<Suspense fallback={<p>Loading...</p>}>
			<div className="main px-4 text-center">
					<Hero/>
					<div className="dropdown-divider"></div>
					<Creations/>
				<Footer/>
			</div>
		</Suspense>
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