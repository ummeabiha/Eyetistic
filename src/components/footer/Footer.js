import {FaEnvelope, FaFacebookF, FaInstagram, FaCopyright} from 'react-icons/fa';
import Logo from '../images/logoheader.png';
import LogoTitle from '../images/logotitle.png';
import {Link} from "react-router-dom";
import './Footer.css';
import './FooterRes.css';
import '../styles.css';

export default function Footer(){
    return(
        <>
        <section className='footerbg'>
            <div className="footer">
                    <div id="logo">
                        <a href="index.html"><img src={Logo} alt="Logo"/>
                        <span><img src={LogoTitle} alt="Eyetistic" /></span></a>
                    </div>

                <div className="footer-sub">
                        <div className="foot-nav">
                        <h2>Our Services</h2>
                            <ul>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/blogs">Insightful Blogs</Link></li>
                                <li><Link to="/shop">E-Commerce Store</Link></li>
                            </ul>
                        </div>
                   

                    <div className="footer-center">
                        <h2>Contact Us</h2>
                        <div>
                            <p>eyetistic@outlook.com</p>
                        </div>
                        <div>
                            <p>123 Street, Karachi, Pakistan.</p>
                        </div>
                        <div>
                            <p>+923138127190</p>
                        </div>
                    </div>

                    <div className="footer-right">
                        <h2>Subscribe</h2>
                        <div>
                            <p>Enter your email to get notified about our premium offers.</p>
                        </div>
                        <div className="subs">
                            <input placeholder="username@gmail.com"/>
                            <FaEnvelope/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="endnote">
                <div className="foot-icons">
                                <a href="ummeabiha.2004@gmail.com" target="_blank">
                                    <FaEnvelope size={20}/>
                                </a>
                                <a href="https://www.facebook.com/ummeabiha.2004" target="_blank">
                                    <FaFacebookF size={20}/>
                                </a>
                                <a href="https://www.instagram.com/umm.e.abiha/" target="_blank">
                                    <FaInstagram size={20}/>
                                </a>
                </div>

                <div id="copyright">
                    <FaCopyright/> 
                    <span><i>copyright</i> 2023 Eyetistic Inc. all rights reserved</span>
                </div>
            </div>
            </section>
        </>
    );
}