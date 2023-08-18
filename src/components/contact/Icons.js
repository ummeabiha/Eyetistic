import {FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt} from 'react-icons/fa';

export default function Icons(){
    return<div className="icons">
        <a href="tel:3138127190"><FaPhoneAlt size={22}/></a>
        <a href="mailto:abiharizvi10.04@gmail.com" target="_blank">
            <FaEnvelope size={22}/>
        </a>
        <a href="https://www.facebook.com/ummeabiha.2004" target="_blank">
            <FaFacebookF size={22}/>
        </a>
        <a href="https://www.instagram.com/umm.e.abiha/" target="_blank">
            <FaInstagram size={24}/>
        </a>
    </div>
}