import { useEffect, useState } from "react";
import '../home/css/HomeShop.css';
import './Gallery.css';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import AlertBox from "../AlertBox";

export default function Gallery() {
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [cart, setCart] = useState([]);

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
    
    const closeAlert = () => {
        setIsAlertOpen(false);
    }

    const { prodid } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData(prodid);
    }, [prodid]);

    const fetchData = (prodid) => {
        fetch(`http://localhost/eyetistic/opengallery.php`, {
        method: 'POST',
        body: JSON.stringify({
            'ProdId': prodid
        }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            setData(data);
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
    
    
    return (<><Navbar/>
        <div className='gallery-div'>
        {data && data.status === "Success" && (
            <div className="gallery">
                <img src={require("../images/shop/" + data.data.prodImage)} id="gallery-img" alt="..." />
                <div className='sub-gallery'>
                <span><h2>NAME: </h2><h3>{data.data.prodName}</h3></span>
                <span><h2>TYPE: </h2><h3>{data.data.prodCategory}</h3></span>
                <span><h2>PRICE: </h2><h3>{data.data.prodPrice}</h3></span>
                <span><h2>COLOR: </h2><h3>{data.data.prodColor}</h3></span>
                <span><h2>QUANTITY: </h2><h3>{data.data.prodQuantity}</h3></span>
                <span><h2>RATINGS: </h2><h3>{data.data.prodRatings}</h3></span>
                <div className="gal-btn">
                    <button onClick={() => addToCart(data.data.prodid)}>Add to Cart</button>
                    <button onClick={() => AddToFav(data.data.prodid)}>Add To Favorite</button>
                </div>
                </div>
        </div>             
        )}
            <AlertBox open={isAlertOpen} onClose={closeAlert}>
                    {alertMessage}
            </AlertBox>
        </div>
        <Footer/>
        </>
    );
}