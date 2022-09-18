import { Link } from "react-router-dom";
import Icons from './FooterIcons'

function Footer() {
    return(
        <div className="container"> 
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> 
                <span className="mb-4 mb-md-0 text-muted"> 
                    Made with {Icons.Heart} by tpguy825 -  <Link to={{ pathname: "https://twitter.com/tobypayneyt" }}>{Icons.Twitter}</Link> <Link to={{ pathname: "https://youtube.com/verydankmemes"}}>{Icons.Youtube}</Link> <Link to={{ pathname: "https://github.com/tpguy825"}}>{Icons.Github}</Link> - <Link to={{ pathname: "https://github.com/tpguy825/website" }} className="footer-icon" style={{color: "#6c757d"}}>{Icons.Code} Source Code</Link>
                </span> 
            </footer> 
        </div>
    );
}

export default Footer;
