import './css/HomeShop.css';
import Eye from '../images/eye-icon.png';
import Heart from '../images/heart-icon.png';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import AlertBox from "../AlertBox";
import {Link} from "react-router-dom";

export default function ShopSub(props){
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const AddToFav = (prodid) => {
        console.log(prodid);
        fetch('http://localhost/eyetistic/addtofav.php', { 
            method: 'POST',
            body: JSON.stringify({
                'Email': 'abiharizvi10.04@gmail.com',
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
    
    return<div className="shop-sub">{
        props.product.map((ele) => {
            return <div className='card'>
                    <div className="icon-div">
                        <button><Link className='hover-btns' to={`/gallery/${ele.prodid}`}><img src={Eye} alt="Eye Icon" /></Link></button>

                        <button className='hover-btns' onClick={() => AddToFav(ele.prodid)}><img src={Heart}></img></button>
                    </div>
                        
            <img src={require("../images/shop/" + ele.prodImage)} id="shop-sub-img" alt="..." />
            </div>
        })
    }
        <AlertBox open={isAlertOpen} onClose={closeAlert}>
            {alertMessage}
        </AlertBox>
    </div>
}
