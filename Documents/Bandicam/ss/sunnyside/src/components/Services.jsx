import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Services({title, description, classN, aos}) {
	useEffect(() => {
    AOS.init()
  }, [])
	return(
		<div className={classN} data-aos={aos}>
			<div className="ServiceText">
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	)

}

export default Services;