import React , {useState} from "react";
import "./item.css";
import { Link } from 'react-router-dom';
import Eye from '../images/eye-icon.png';
import Heart from '../images/heart-icon.png';
import AlertBox from "../AlertBox";

const Item = (props) => {
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
  
  const closeAlert = () => {
      setIsAlertOpen(false);
  }


  return (
    <div className="item-card" key={props.key}>
      <img src={require("../images/shop/" + props.pic)} alt="Product1" />
      <h3>{props.title}</h3>
      <p>Rs{props.price}</p>
      <div className="item-overlay">
        <div className="item-overlay-content">
          {/* <div className="icon-div">
            <button><Link className='hover-btns' to={`/gallery/${props.key}`}><img src={Eye} alt="Eye Icon" /></Link></button>
            <button className='hover-btns' onClick={() => AddToFav(props.key)}><img src={Heart}></img></button>
          </div> */}
          <h3>{props.title}</h3>
          <p>{props.type}</p>
        </div>
      </div>
      <AlertBox open={isAlertOpen} onClose={closeAlert}>
                    {alertMessage}
            </AlertBox>
    </div>
  );
  
};

export default Item;
