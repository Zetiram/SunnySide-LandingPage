import React from 'react'
import logo from '../images/logoF.svg'
import iconFacebook from '../images/icon-facebook.svg'
import iconInstagram from '../images/icon-instagram.svg'
import iconTwitter from '../images/icon-twitter.svg'
import iconPinterest from '../images/icon-pinterest.svg'
import '../styles.css'
function Footer() {
	return(
		<>
			<div className="Footer-Logo">
				<img src={logo}/>
			</div>

			<div className="Footer-AboutUs">
				<ul>
					<li><a href="#"></a>About</li>
				</ul>

				<ul>
					<li><a href="#"></a>Services</li>
				</ul>

				<ul>
					<li><a href="#"></a>Projects</li>
				</ul>
			</div>

			<div className="Social-Media-Container">
			 	<a href="#"><img src={iconFacebook} alt="Facebook"/></a>
			 	<a href="#"><img src={iconInstagram} alt="Instagram"/></a>
			 	<a href="#"><img src={iconTwitter} alt="Twitter"/></a>
			 	<a href="#"><img src={iconPinterest} alt="Pinterest"/></a>
			</div>
		</>
	)
}

export default Footer;