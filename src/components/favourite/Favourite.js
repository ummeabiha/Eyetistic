import { useState, useEffect } from 'react';
import "../cart/Cart.css";
import "./Favourite.css";
import { FaTags,FaTrashAlt } from "react-icons/fa";
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

export default function Favourite(){
    const [Fav, setFav] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost/eyetistic/favourite.php", {
            method: 'POST',
            body: JSON.stringify({Email: localStorage.getItem("Email"),}),
        })
        .then((response) => response.json())
        .then((data) => 
        {
            setFav(data);
            console.log(data);
    })
        .catch((error) => console.error(error));
    }, []);

    const handleRemove = (prodId) => {
        fetch("http://localhost/eyetistic/removeFavItem.php", {
            method: 'POST',
            body: JSON.stringify({ prodId }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                // Remove item from front-end
                setFav(Fav.filter(item => item.prodid !== prodId));
            } else {
                console.error(data.message);
            }
        })
        .catch((error) => console.error(error));
    }

    return<>
    <Navbar/>
    <div className="favorites">
    <div className="cart-div">
    <h1>Your Favourites</h1>
        {Fav.map((ele) => {
        return (
            <div className="cart">
                <img src={require("../images/shop/" + ele.prodImage)} alt="..." />
                <h3 id="name">{ele.prodName}</h3>
                <span>Type: {ele.prodCategory}</span>
                <span><FaTags /> {ele.prodPrice}</span>
                <FaTrashAlt id="trash" onClick={() => handleRemove(ele.prodid)} />
            </div>
        );
        })}
    </div>
    </div>
    <Footer/>
    </>
}