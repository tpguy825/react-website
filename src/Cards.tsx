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
	};
}

var topleft = {
	image: undefined,
	title: "PMMPInstaller",
	subtitle: "The easy way to install PocketMine-MP",
	text: "Placeholder text",
	links: {
		website: "https://pmmpinstaller.cf",
		source: "https://github.com/tpguy825/PMMPInstaller"
	}
}
var topright = {
	image: undefined,
	title: "Placeholder text",
	subtitle: "More placeholder text",
	text: "Even more placeholder text",
	links: {
		website: "/",
		source: "/"
	}
}
var bottomleft = {
	image: undefined,
	title: "Placeholder text",
	subtitle: "More placeholder text",
	text: "Even more placeholder text",
	links: {
		website: "/",
		source: "/"
	}
}
var bottomright = {
	image: undefined,
	title: "Placeholder text",
	subtitle: "More placeholder text",
	text: "Even more placeholder text",
	links: {
		website: "/",
		source: "/"
	}
}

var cards = {
	topleft: topleft,
	topright: topright,
	bottomleft: bottomleft,
	bottomright: bottomright
}

/** 
 * This contains all the cards info for the Creations page
*/
export default cards;