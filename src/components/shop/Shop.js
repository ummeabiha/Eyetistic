import React, { useState, useEffect } from "react";
import Eye from '../images/eye-icon.png';
import Heart from '../images/heart-icon.png';
import { Link } from 'react-router-dom';
import Item from "./item";
import axios from "axios";
import "./shop.css";
import { FaSearch } from "react-icons/fa";
import SimpleImageSlider from "react-simple-image-slider";
import slider1 from "../images/shop/slider1.JPG";
import slider3 from "../images/shop/product11.jpg";
import slider4 from "../images/shop/product10.jpg";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Scroll from "../scroll/Scroll";
import AlertBox from "../AlertBox";


export default function Shop() {
  const [Arr, setArr] = useState([]);
  const [Filter, setFilter] = useState("Lens");
  const [Search, setSearch] = useState("");
  const [Email, setEmail] = useState("");
  const [cart, setCart] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const images = [slider1, slider4, slider3];

  const temp = localStorage.getItem("Email");
  // const Cart = new Array();

  useEffect(() => {
    axios.get("http://localhost/eyetistic/shop.php").then((response) => {
      setEmail(temp);
      setArr(response.data);
    });
  }, []);
  
  function handleSearch() {
    if (Search === "") {
      alert("Kindly enter something first");
    } else {
      axios
        .post("http://localhost/eyetistic/search.php", { item: Search })
        .then((response) => {
          if (response.data === "not found") {
            axios
              .get("http://localhost/eyetistic/shop.php")
              .then((response) => {
                setArr([]);
              });
          } else {
            setArr(response.data);
            setSearch("");
          }
        });
    }
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }
  function glassesOnly(event) {
    event.preventDefault();
    axios
      .post("http://localhost/eyetistic/filter.php", { category: "glasses" })
      .then((response) => {
        setArr(response.data);
      });
  }
  function lensOnly(event) {
    event.preventDefault();
    setFilter("Lens");
    axios
      .post("http://localhost/eyetistic/filter.php", { category: "Lens" })
      .then((response) => {
        setArr(response.data);
      });
  }

  function All(e) {
    e.preventDefault();
    axios.get("http://localhost/eyetistic/shop.php").then((response) => {
      setArr(response.data);
    });
  }

  const closeAlert = () => {
    setIsAlertOpen(false);
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


  return (<>
    <Navbar/>
    <div className="ShopMain">
      <div className="HeaderDiv">
          <div className="mainFirstContainer">
            <SimpleImageSlider images={images} width={1400} height={600} showBullets={true} autoPlay={true} autoPlayDelay={2}/>
            
            <div id="HomeHeader" className="firstContainer">
                <h1>Shop</h1>
                <p>Discover a world of endless possibilities at our online store. Browse through our curated collection of top-notch products and find exactly what you're looking for.
                </p>
                <button><a href='#prods'>Explore Shop</a></button>
            </div>
      </div> 
      </div>

      <div className="optContainer">
        <button type="submit" onClick={All}>All</button>
        <button type="submit" onClick={glassesOnly}>Glasses</button>
        <button onClick={lensOnly}>Lens</button>

        <FaSearch id="searchIcon" />
        <input type="text" placeholder="Search Products" value={Search} onChange={handleChange}/>
        <button id="ha-search-btn" onClick={handleSearch}>Search</button></div>
      
        <div className="productGrid" id='prods'>
          {Arr.map((Element) => {
            return (
              <div>
                  <div className="icon-div">
                    <button><Link className='hover-btns' to={`/gallery/${Element.prodid}`}><img src={Eye} alt="Eye Icon" /></Link></button>

                    <button className='hover-btns' onClick={() => AddToFav(Element.prodid)}><img src={Heart}></img></button>
                  </div>
                  <Item
                    key={Element.prodid}
                    title={Element.prodName}
                    price={Element.prodPrice}
                    type={Element.prodCategory}
                    pic={Element.prodImage}
                  />

              <button id="addToCart" onClick={() => addToCart(Element.prodid)}>Add to Cart</button>

            </div>
          );
        })}
      </div>
      <AlertBox open={isAlertOpen} onClose={closeAlert}>
            {alertMessage}
          </AlertBox>
    </div>
    <Scroll/>
        <Footer/>
    </>
  );
}


