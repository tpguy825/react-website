// Bootstrap stuff
import 'bootstrap-icons/font/bootstrap-icons.css'
import * as bootstrap from 'bootstrap'

// React stuff
import React from 'react'
import ReactDOM from 'react-dom/client'

// Other files
import './scss/styles.scss'

// Components
import Hero from './Hero'
import Creations from './Creations'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  	<React.StrictMode>
		<div className="px-4 py-5 my-5 text-center">
			<Hero/>
                        <div className="dropdown-divider"></div>
			<Creations/>
		</div>
                <Footer/>
  	</React.StrictMode>
)
