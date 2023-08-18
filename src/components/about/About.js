import './About.css';
import './AboutRes.css';
import '../styles.css';

import bgVideo from '../images/aboutbg.mp4';
import bgImg from '../images/aboutbg.png';

import Developer from './Developer';
import Reviews from './Reviews';
import Offers from './Offers';
import Stats from './Stats';
import Experience from './Experience';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Scroll from '../scroll/Scroll';

export default function About(){
    return<div>
        <Navbar/>
        <div className="HeaderDiv">
            <video src={bgVideo} poster={bgImg} muted autoPlay loop id="bg"/>
            <div className="header">
                <h1>ABOUT US</h1>
                <p>Comprehensive eye care solutions for optimal vision health. Explore a vast selection of stylish eyewear, stay informed with informative eye blogs, and conveniently assess your vision with reliable online eye tests. Experience excellence in eye care at every step of your journey.</p>
            </div>
        </div> 

        <Scroll/>

        <Offers/>

        <Stats/>

        <Developer/>

        <Experience/>

        <Reviews/>

        <Footer/>

    </div>
}