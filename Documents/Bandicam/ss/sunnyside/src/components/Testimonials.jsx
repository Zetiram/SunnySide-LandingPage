import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Testimonials({image, testimonial, name, role, aos}) {
	useEffect(() => {
		AOS.init()
	}, [])
	return(
		<div className="Testimonial-Container" data-aos={aos}>
			<div className="Testimonial-Container__img-Container">
				<img className="Testimonial-Container__img-Container--img" src={image} />
			</div>

			<div className="Testimonial-Container__Review-Container">
				<p className="Testimonial-Container__Review-Container--text">{testimonial}</p>
			</div>

			<div className="Testimonial-Container__Name-Container">
				<h4 className="Testimonial-Container__Name-Container--name">{name}</h4>

				<small className="Testimonial-Container__Name-Container--role">{role}</small>
			</div>
		</div>

	)
}

export default Testimonials