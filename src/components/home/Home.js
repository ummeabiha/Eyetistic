import React, { useState } from 'react';
import {FaTruckMoving,FaClock,FaGlobeAfrica,FaHeadset} from 'react-icons/fa';
import './css/Home.css';
import './css/HomeShop.css';
import '../styles.css';
import bgVideo from '../images/bg.mp4';
import bgImg from '../images/bg.png';
import {Link} from "react-router-dom";
import Choose from './Choose';
import Featured from './Featured';
import BestSeller from './BestSeller';
import NewArrival from './NewArrival';
import Blog from './Blog';
import Scroll from '../scroll/Scroll';
import ShopBlog from './ShopBlog';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


export default function Home(){
    const [content, setContent] = useState(<BestSeller/>);

    const Feature = () => {
      setContent(<Featured/>);
    }

    const BestSelling = () => {
      setContent(<BestSeller/>);
    }

    const New = () => {
      setContent(<NewArrival/>);
    }

    return(
        <><Navbar/>
            <div className="HeaderDiv">
                <video src={bgVideo} poster={bgImg} muted autoPlay loop id="bg"/>
                <div id="HomeHeader">
                    <h1>Eyetistic</h1>
                    <h3><span id="taglines"></span></h3>
                    <p> Welcome to a world of crystal-clear vision! Our website offers a wide range of high-quality optics
                        and lenses from the best brands in the industry. Whether you're looking for stylish glasses or
                        comfortable contact lenses, we have got you covered. <span>But that's not all - we also offer a range of
                        fun games and activities to test your eye health and educational content to help you maintain
                        healthy vision for life. So come on in and explore our website today!</span>
                    </p>
                    <button><Link id="color" to='/about'>Explore</Link></button>
                </div>
            </div> 

            <Scroll/>

            <Choose/>

            <ShopBlog/>
            
            <div id="best-btns">
                <button onClick={Feature}>Featured</button>
                <button onClick={BestSelling}>Best Seller</button>
                <button onClick={New}>New Arrivals</button>
            </div>
            
            <div>{content}</div>
            
            <div className="icons del-icons">
                <div>
                    <FaClock size={26}/>
                    <h3>24 Hour Service Everyday</h3>
                </div>
                <div>
                    <FaTruckMoving size={26}/>
                    <h3>Reliable and Fast Delivery</h3>
                </div>
                <div>
                    <FaGlobeAfrica size={26}/>
                    <h3>Available Nation Wide</h3>
                </div>
                <div>
                    <FaHeadset size={26}/>
                    <h3>Instant Customer Support</h3>
                </div>
            </div>

            <Blog/>
            
            <Footer/>

        </>
    );
}