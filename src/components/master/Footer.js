import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return(
    <div className="bodydiv">
      <footer>
        <div id="footer_div">
          <ul>
            <li><Link to="/">
                <img src="images/Logodesign2.png" id="footer_logo" alt="footer logo"/>
              </Link></li>
            <li><Link to="/">CONTACT US</Link></li>
            <li><Link to="/TermsOfService">TERMS OF SERVICE </Link></li>
            <li><Link to="/privacyPolicy">PRIVACY POLICY </Link></li>
            <li><a href="https://discord.gg/rqEvcbDcQm">COMMUNITY DISCORD</a></li>
          </ul>
        </div>
      </footer>
        </div>
    );
}

export default Footer;