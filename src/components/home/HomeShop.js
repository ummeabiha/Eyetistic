import Eye from '../images/eye-icon.png';
import Heart from '../images/heart-icon.png';
import {FaTags} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import AlertBox from '../AlertBox';


export default function HomeShop(props){
    const [cart, setCart] = useState([]);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const AddToFav = (prodid) => {
        console.log(prodid);
        fetch('http://localhost/eyetistic/addtofav.php', { 
            method: 'POST',
            body: JSON.stringify({
                'Email': localStorage.getItem("Email"),
                'ProdId': prodid
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status=='Success'){
                setAlertMessage("Added to Favorite");
                setIsAlertOpen(true);}
            else if (data.status=='Already Exists'){
                setAlertMessage("Item Already in Favorites");
                setIsAlertOpen(true);
            }
            else{
                setAlertMessage("Can not add to Favorites");
                setIsAlertOpen(true);
            }
        })
        .catch(error => {
            console.log(error);
        });
    };

    const addToCart = (prodId) => {
        console.log(prodId);
        fetch("http://localhost/eyetistic/addtocart.php", {
          method: 'POST',
          body: JSON.stringify({
              'Email': localStorage.getItem("Email"),
              'ProdId': prodId
          }),
        })
    
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status=='Success'){
                setCart(data.cart);
                setAlertMessage("Added to Cart");
                setIsAlertOpen(true);}
            else if(data.status=='ExceedsQuantity'){
                setAlertMessage("Product Out of Stock");
                setIsAlertOpen(true);
            }
            else{
                setAlertMessage("Error adding to Cart");
                setIsAlertOpen(true);
            }
        })
        .catch(error => {
            console.log(error);
        });
    };
    
    
    const closeAlert = () => {
        setIsAlertOpen(false);
    }


    return<div className="cards">
            {props.product.map((ele) => {
                return <div className='card'>
                        <div className="icon-div">
                        <button><Link className='hover-btns' to={`/gallery/${ele.prodid}`}><img src={Eye} alt="Eye Icon" /></Link></button>

                        <button className='hover-btns' onClick={() => AddToFav(ele.prodid)}><img src={Heart}></img></button>
                        </div>
                        <img src={require("../images/shop/" + ele.prodImage)} className="card-img" alt="..." />
                        <div className="card-body">
                            <h3 id="name">{ele.prodName}</h3>
                            <div className="card-sub-body">
                                <span id="price"><FaTags/> {ele.prodPrice}</span>
                                <span id="color"><span style={{ backgroundColor: ele.prodColor }}></span>{ele.prodColor}</span>
                            </div>
                            <button id="cart-btn" onClick={() => addToCart(ele.prodid)}>Add to Cart</button>
                        </div>
                </div> })}
                
            <AlertBox open={isAlertOpen} onClose={closeAlert}>
                    {alertMessage}
            </AlertBox>
    </div>
}

