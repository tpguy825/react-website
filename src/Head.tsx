export default function Head(props: any) {
	var Partytown = props.partytown;
	return(
	<>
		<script type="text/partytown" dangerouslySetInnerHTML={{ __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.type="text/partytown";t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "dt23pa291z");
        `}}></script>
		{/* Google tag (gtag.js) */}
		<script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-8PRJJ0GGPS"></script>
		<script type="text/partytown" dangerouslySetInnerHTML={{ __html: `
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			
			gtag('config', 'G-8PRJJ0GGPS');
		` }}></script>
		<Partytown debug={true} forward={['dataLayer.push']} />
	</>
	);
}