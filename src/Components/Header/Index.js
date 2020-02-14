import React from "react";
import "./Header.css"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "/Users/davidignatius/Desktop/hacktiv/r1tuts/node_modules/@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faFacebook, faTwitter } from "/Users/davidignatius/Desktop/hacktiv/r1tuts/node_modules/@fortawesome/free-brands-svg-icons";
import { faHeart, faComment } from "/Users/davidignatius/Desktop/hacktiv/r1tuts/node_modules/@fortawesome/free-regular-svg-icons"
import { faShareAlt, faSignOutAlt } from "/Users/davidignatius/Desktop/hacktiv/r1tuts/node_modules/@fortawesome/free-solid-svg-icons"
import {Button, Alert} from 'antd';
class Header extends React.Component {

  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a className="Nav-brand-logo" href="/Cards4">
              Instagram
                     </a>
            {/* <Link to="/home">Feeds        </Link><Link to="/">Login</Link> */}
          </div>
          {/* <FontAwesomeIcon icon={faSignOutAlt} size='3x' class="signout"></FontAwesomeIcon> */}
          <div className="headerbutton">
          <Button icon="search">Search</Button>
          <Link to="/about"><Button type="danger">About</Button></Link>

          <Link to="/"><Button type="primary" >Log Out</Button></Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;