import {FaBookReader, FaEye, FaWallet} from 'react-icons/fa';
import {FaBagShopping} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Offers(){
    return<div className="offer">
        <h1>What We Can Offer?</h1>
        <div id="offers">
            <div class="offer-item">
                <div><FaBagShopping size={40}/></div>
                <Link to="/shop">
                <h3>Shopping</h3>
                <p>A convenient way to compare prices, read reviews, and find the best deals.</p>
                </Link>
            </div>
            <div className="offer-item">
                <div><FaBookReader size={40}/></div>
                <Link to="/blogs">
                <h3>Education</h3>
                <p>Blog for valuable insights, tips, and resources to enhance your learning journey.</p>
                </Link>
            </div>
            <div className="offer-item">
                <div><FaEye size={40}/></div>
                <Link to="/home">
                <h3>Eye Tests</h3>
                <p>Eye tests thorough assessment and personalized eye care recommendations.</p>
                </Link>
            </div>
            <div className="offer-item">
                <div><FaWallet size={40}/></div>
                <Link to="/checkout">
                <h3>Payment</h3>
                <p>Ensures secure and hassle-free payments for all customer transactions.</p>
                </Link>
            </div>
        </div>
    </div>
}