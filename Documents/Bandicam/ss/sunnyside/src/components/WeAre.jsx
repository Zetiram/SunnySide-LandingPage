import React from 'react'
import '../styles.css'
import arrow from '../images/icon-arrow-down.svg'

function WeAre() {
	return(
		<div className="WeAre-Container">
			<div className="WeAre-Container__title-container">
				<h1 className="WeAre-Container__title-container--title WeAre--title">WE ARE CREATIVES</h1>
			</div>

			<div className="WeAre-Container__img-container">
				<img className="WeAre-Container__title-container--img WeAre--img" src={arrow}/>
			</div>	
		</div>
	)
}

export default WeAre;