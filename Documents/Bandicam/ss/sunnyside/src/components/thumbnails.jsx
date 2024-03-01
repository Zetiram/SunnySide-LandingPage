import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles.css'

function Thumbnails({img1, img2, img3, img4}) {
	useEffect(() => {
		AOS.init()
	}, [])
	return(
		<div className="Thumbnails-Container">
			<img data-aos="fade-down" src={img1}/>
			<img data-aos="fade-left" src={img2}/>
			<img data-aos="fade-right" src={img3}/>
			<img data-aos="fade-up" src={img4}/>
		</div>
	)
}

export default Thumbnails;