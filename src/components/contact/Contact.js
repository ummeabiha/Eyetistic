import './Contact.css';
import './ContactRes.css';
import '../styles.css';
import bg from '../images/contactbg.mp4';
import ContactForm from './ContactForm';
import Faq from './Faq';
import ReachUs from './ReachUs';
import Icons from './Icons';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Scroll from '../scroll/Scroll';


export default function Contact(){
    return(
    <><Navbar/>
        <div className="HeaderDiv">
            <video src={bg} muted autoPlay loop id="bg"/>
            <div className="header">
                <h1>Get In Touch<span> With Us</span></h1>
                    <p>We value your feedback and are here to assist you. <span>Whether you have questions, suggestions, or require support, our dedicated team is ready to help.</span><span> We strive to provide timely and reliable assistance to ensure your satisfaction. Your input is important to us, and we look forward to hearing from you.</span></p>
                <button><a id="color" href="#contact">Contact</a></button>
            </div>
        </div> 

        <Scroll/>

        <ReachUs/>

        <Icons/>

        <ContactForm/>
  
        <div id="img"><div id="faq-img"></div></div>

        <Faq/>

        
        <Footer/>
    </>

);
}




