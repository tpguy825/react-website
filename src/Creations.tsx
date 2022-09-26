// This makes it eaiser to modify them
import cards from "./Cards"

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

function card(cardinfo: CardElement): JSX.Element {
	if (cardinfo.image !== undefined && cardinfo.image.src !== null && cardinfo.image.alt !== null) {
		return (
			<div className="card cards">
				<div className="card-body">
					<img src={cardinfo.image.src} alt={cardinfo.image.alt}/>
					<h4 className="card-title">{cardinfo.title}</h4>
					<h6 className="text-muted card-subtitle mb-2">{cardinfo.subtitle}</h6>
					<p className="card-text">{cardinfo.text}</p>
					<a className="card-link" href={cardinfo.links.website}>Website</a>
					<a className="card-link" href={cardinfo.links.source}>Source</a>
				</div>
			</div>
		)
	} else {
		return (
			<div className="card cards">
				<div className="card-body">
					<h4 className="card-title">{cardinfo.title}</h4>
					<h6 className="text-muted card-subtitle mb-2">{cardinfo.subtitle}</h6>
					<p className="card-text">{cardinfo.text}</p>
					<a className="card-link" href={cardinfo.links.website}>Website</a>
					<a className="card-link" href={cardinfo.links.source}>Source</a>
				</div>
			</div>
		)
	}
}

/**
 * This is 2x2 grid of my creations.
 * To change any of the card info, go to Cards.tsx
 */
function Creations(): JSX.Element {
	return (
		<div>
			<h1>My Creations</h1>
        	<div className="row">
        	    <div className="col">
					{card(cards.topleft)}
        	    </div>
				<br/>
        	    <div className="col">
					{card(cards.topright)}
				</div>
        	</div>
			<br/>
        	<div className="row">
        	    <div className="col">
					{card(cards.bottomleft)}
				</div>
				<br/>
        	    <div className="col">
					{card(cards.bottomright)}
				</div>
        	</div>
		</div>
	);
}

export default Creations;