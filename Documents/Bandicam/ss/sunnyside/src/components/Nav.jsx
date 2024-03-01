import React, {useState, useEffect} from 'react'
import logo from '../images/logo.svg'
import menu from '../images/icon-hamburger.svg'
import Menu from './menu.jsx'

function Nav() {
	const [active, setActive] = useState(false)
	const [scrollL, setScrollL] = useState(0)

	useEffect(() => {
		const handleScroll = event => {
			setScrollL(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)

		return() => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])



	const show = () => {
		setActive(!active)
	}

	return(
		<>
			<nav className={`Nav-Container ${scrollL > 0 && scrollL < 400 ? 'bg1' : ''} ${scrollL > 400 && scrollL < 665 ? 'bg2' : ''} 
			${scrollL > 665 && scrollL < 985 ? 'bg1' : ''} ${scrollL > 985 && scrollL < 1245 ? 'bg3' : ''} 
			${scrollL > 1246 && scrollL < 1518 ? 'bg1' : ''} ${scrollL > 1519 && scrollL < 1936 ? 'bg4' : ''} 
			${scrollL > 1936 ? 'bg1' : ''}`}>

				<div className="Nav-Container__logo-container">
					<img className="Nav-Container__logo-container--img" src={logo}/>
				</div>

				<div className="Nav-Container__menu-container">
					<img className="Nav-Container__menu-container--img" src={menu} onClick={show} alt=""/>
				</div>

				<div className="Nav-Container--items">
					<ul>
						<li>
							<a href="">About</a>
						</li>
					</ul>

					<ul>
						<li>
							<a href="">Services</a>
						</li>
					</ul>

					<ul>
						<li>
							<a href="">Projects</a>
						</li>
					</ul>

					<button className="Menu-Content--btn">Contact</button>

					
				</div>

			</nav>

			{active === true ? <Menu show="active Menu-Container"/> : <Menu show="inactive Menu-Container"/> }
		</>
	)
}

export default Nav

