import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function AboutUS({title, description, aos}) {
	 useEffect(() => {
    AOS.init()
  }, [])
	return(
		<div className="AboutUs-Container" data-aos={aos}>
			<h2 className="AboutUs-Container__title">{title}</h2>

			<p className="AboutUs-Container__description">{description}</p>

			<h5 className="AboutUs-Container__learnMore">LEARN MORE</h5>
			
		</div>

	)
}

export default AboutUS;