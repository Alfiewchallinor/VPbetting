import React from 'react'
import { Link } from "react-router-dom";

const Loginicon = () => {
    

    return (
        <div>
            <section id="whenSignedOut">
            
          <Link to="/" id="LOGIN">
            LOGIN
          </Link>
        </section>
        <section id="whenSignedIn" hidden="{true}">
          <Link to="/">
            <button id="userdetailslink" />
          </Link>
        </section>
        </div>
    )
}

export default Loginicon
