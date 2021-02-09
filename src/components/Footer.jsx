import React from 'react';
import logo from '../images/catwiki.svg';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="catwiki" className="inverted" />
      </div>
      <div className="footer__credit white">aydink88 - devchallenge.io 2021</div>
    </div>
  );
}
