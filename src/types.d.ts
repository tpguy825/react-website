// Vite types
/// <reference types="vite/client" />

type CardElement = {
	image: {
		src: string;
		alt: string;
	} | undefined;
	title: string;
	subtitle: string;
	text: string;
	links: {
		website: string;
		source: string;
	}
}

type CardsList = {
	topleft: CardElement,
	topright: CardElement,
	bottomleft: CardElement,
	bottomright: CardElement
}