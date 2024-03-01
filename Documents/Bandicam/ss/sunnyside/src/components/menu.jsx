import react from 'react'

function Menu({show}) {
	return(
		<>
			<div className={show}>
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
		</>
	)
}

export default Menu