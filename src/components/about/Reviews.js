import review from '../images/review.png';
import { Link } from 'react-router-dom';

export default function Reviews(){
    return <div className="clients">
        <div id="client-content">
            <h1>Hundreds of Happy Clients</h1>
            <p>Several of them we asked how satisfied they are with our services. Here are their statements...</p>
            <button><Link to="/contact">Give Us Review</Link></button>
        </div>
        <div id="review">
            <img src={review} alt="Customer Reviews"/>
        </div> 
    </div>
}