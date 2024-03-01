import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import logo from './logo.svg';
import './styles.css';
import Nav from './components/Nav.jsx'
import WeAre from './components/WeAre.jsx'
import Images from './components/images.jsx'
import egg from './images/mobile/image-transform.jpg'
import AboutUs from './components/aboutUs.jsx'
import cup from './images/mobile/image-stand-out.jpg'
import Services from './components/Services.jsx'
import Testimonials from './components/Testimonials.jsx'
import emily from './images/image-emily.jpg'
import thomas from './images/image-thomas.jpg'
import jennie from './images/image-jennie.jpg'
import Thumbnails from './components/thumbnails.jsx'
import galleryBottle from './images/mobile/image-gallery-milkbottles.jpg'
import galleryOrange from './images/mobile/image-gallery-orange.jpg'
import galleryCone from './images/mobile/image-gallery-cone.jpg'
import gallerySugar from './images/mobile/image-gallery-sugar-cubes.jpg'
import Footer from './components/Footer.jsx'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="App">
      <header>
        <Nav/>
      </header>

      <main>
        <WeAre/>

          <div className="Transform-Container">
              <Images image={egg} aos="fade-left"/>
              <AboutUs aos="fade-right" title="Transform your brand" description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you"/>
          </div>

          <div className="StandOut-Container">
              <Images image={cup} aos="fade-right"/>
              <AboutUs aos="fade-left" title="Stand out to the right audience" description="Using a collaborative formula to designers, researchers, photographers, videographers, and copywriters. We'll build and extend your brand in digital places."/>
          </div>

          <div className="Services-Container">
              <Services aos="zoom-in" classN="cherries" title="Graphic Design" description="Great designs makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention."/>
              <Services aos="zoom-in" classN="orange" title="Photography" description="Increase your credibility by getting the most stunning high-quality photos that improve your business image."/>
          </div>
          <section className="Testimonial-Section">
            <h4 className="Testimonial-Section--title">CLIENT TESTIMONIALS</h4>
              <div className="Testimonial-Section__Container">
                <Testimonials aos="flip-left" image={emily} testimonial="We put our trust in Sunnyside and they delivered, makeing sure our needs were met, and deadlines were always hit." name="Emily R." role="Marketing Director"/>
                <Testimonials aos="flip-right" image={thomas} testimonial="Sunnyside's enthusiasm coupled with their keen interest in our brand's succes, made it a satisfying and enjoyable experience." name="Thomas S." role="Chief Operating Officer"/>
                <Testimonials aos="flip-left" image={jennie} testimonial="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommeded" name="Jennie E." role="Business Owner"/>
              </div>
          </section>

          <section>
            <Thumbnails img1={galleryBottle} img2={galleryOrange} img3={galleryCone} img4={gallerySugar}/>
          </section>
      </main>

      <footer>
        <Footer/>

      </footer> 
    </div>
  );
}

export default App;
