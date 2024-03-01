import React, {useEffect} from 'react'
import '../styles.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Images({image, aos}) {
	  useEffect(() => {
    AOS.init()
  }, [])
	return(
		<>
			<div className="Image-Container" data-aos={aos}>
				<img className="Image-Container--img" src={image}/>
			</div>
		</>

	)
}

export default Images;