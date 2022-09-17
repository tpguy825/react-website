import Heart from './assets/icons/heart-fill.svg'
import Twitter from './assets/icons/twitter.svg'
import Youtube from './assets/icons/youtube.svg'
import Github from './assets/icons/github.svg'

function Footer() {
    return(
        <div className="container"> 
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> 
                <span className="mb-4 mb-md-0 text-muted"> 
                    Made with <img src={Heart}/> by <a href="//tpguy825.github.io">tpguy825</a> -  <a href="//twitter.com/tobypayneyt"><img src={Twitter}/></a> <a href="//youtube.com/verydankmemes"><img src={Youtube}/></a> <a href="//github.com/tpguy825"><img src={Github}/></a> - <a href="//github.com/tpguy825/website">Source Code</a> 
                </span> 
            </footer> 
        </div>
    );
}

export default Footer;
