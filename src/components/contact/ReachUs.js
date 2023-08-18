import {FaEnvelope, FaPhoneAlt} from 'react-icons/fa';
import {FaLocationDot} from 'react-icons/fa6';

export default function ReachUs(){
    return<div className="ReachUs">
        <h1>Reach Us</h1>
        <div>
            <p>If you got any questions</p>
            <p>Please do not hesitate to reach us.</p>
        </div>
        <div id="reachdivs">
            <div className="info">
                <div><FaLocationDot size={22}/></div>
                <h2>Address</h2>
                <div>Shop#E446, 123 Street</div>
            </div>
            <div className="info">
                <div><FaEnvelope size={22}/></div>
                <h2>Email Us</h2>
                <div>eyetistic@outlook.com</div>
            </div>
            <div className="info">
                <div><FaPhoneAlt size={22}/></div>
                <h2>Call Us</h2>
                <div>+923138127190</div>
            </div>
        </div>
    </div>
}