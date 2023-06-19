import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="frame" id="frame">
      <div className="frame__title-main"><Link to="/">Ë zenbauhaus</Link></div>
      <ul className="link-menu">
        <li><Link to="/about">about</Link></li>
        <li><Link to="/reel">reel</Link></li>
        <li><Link to="/work">work</Link></li>
        <li><Link to="/art">art</Link></li>
        <li><a href="http://instagram.com/tra5her_sk8">ig</a></li>
        <li><a href="http://facebook.com/ezbawa">fb</a></li>
      </ul>
    </div>
  );
}

export default Header;
