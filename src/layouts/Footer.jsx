import React from 'react';

import '../styles/Footer.scss';
import FooterLink from '../components/FooterLink';

const currentYear = (new Date()).getFullYear();

const footerLinksData = [
  {
    text: 'Polityka prywatności',
    ref: ''
  },
  {
    text: 'Regulamin',
    ref: ''
  },
  {
    text: 'Usługi',
    ref: ''
  },
  {
    text: 'Cennik',
    ref: ''
  }
]

const Footer = () => {

  const footerLinksToShow = footerLinksData.map(link => {
    return <FooterLink key={link.text} text={link.text}/> 
  })

  return ( 
    <footer className="footer section">
    <div className="wrapper">
        <div className="footer__box">
          <p className="footer__box-item">&copy; {currentYear} SunnyVale</p>
          {footerLinksToShow}
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;