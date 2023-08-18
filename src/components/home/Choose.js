import {FaWallet, FaThumbsUp, FaShoppingBag, FaTruckMoving} from 'react-icons/fa';

export default function Choose(){
    return(
        <div className="ChooseUs">
        <div>
            <h1>Why Choose Us?</h1>
            <h3>A Brand Name You Can Trust and Rely On</h3>
        </div>

        <div id="choose">
            <div className="chooseDiv">
                <FaWallet size={26}/>
                <h3>Affordable Price Guarantee</h3>
            </div>
            <div className="chooseDiv">
                <FaThumbsUp size={26}/>
                <h3>Highly Qualified Service</h3>
            </div>
            <div className="chooseDiv">
                <FaShoppingBag size={26}/>
                <h3>Wide Variety of Products</h3>
            </div>
            <div className="chooseDiv">
                <FaTruckMoving size={26}/>
                <h3>Reliable Product Delivery</h3>
            </div>
        </div>
    </div>

    );
}