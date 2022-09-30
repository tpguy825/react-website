import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import Footer from "../components/Footer";

// scss
import Styles from '../components/scss/styles.scss'

export default component$(() => {
	useStyles$(Styles)
  	return (
    	<>
    	  	<main>
    			<Slot />
    	  	</main>
    	  	<Footer />
    	</>
  	);
});
