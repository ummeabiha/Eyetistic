import React, { useEffect, useState } from "react";
// import axios from "axios"
import "./Cart.css";
import { FaTags, FaTrashAlt  } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

// export default function ViewProductCart() {
//   const [Arr, setArr] = useState([]);
//   const [Total, setTotal] = useState(0);
//   var total = 0;

//   function totalCalculate() {
//     Arr.forEach((element) => {
//       total += parseInt(element.prodPrice);
//       console.log(total);
//     });
//     // setTotal(total);
//   }
//   useEffect(() => {
//     axios
//       .post("http://localhost/eyetistic/viewcart2.php", {
//         Email: localStorage.getItem("Email"),
//       })
//       .then((response) => {
//         setArr(response.data);
//       })
//       .then(totalCalculate())
//       .then(setTotal(total));
//     // .then(totalCalculate());
//   }, []);
//   return (<>
//       <Navbar/>
//     <div className="CartMain">
//       <h1 id="cartHeading">Cart</h1>

//       <div className="cart-div">
//         {Arr.map((ele) => {
//           return (
//             <div className="cart">
//               <img src={require("../images/shop/" + ele.prodImage)} alt="..." />
//               <h3 id="name">{ele.prodName}</h3>
//               <span>Type: {ele.prodCategory}</span>
//               <span><FaTags /> {ele.prodPrice}</span>
//             </div>
//           );
//         })}
//       </div>
//       <div className="cart-btns">
//         <Link to="/shop">Back to Shop</Link>
//         <Link to="/checkout">Proceed to checkout</Link>
//       </div>
//     </div>
//       <Footer/>
//       </>
//   );
// }



export default function ViewProductCart() {
  const [Cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost/eyetistic/displaycart.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'Email': localStorage.getItem("Email"),
      }),
    })
      .then(response => response.json())
      .then(data => {
        setCartItems(data.cartItems);
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);


  const handleRemove = (prodId) => {
    fetch("http://localhost/eyetistic/removecartitem.php", {
      method: 'POST',
      body: JSON.stringify({ prodId }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); 
      if (data.success) {
        setCart(Cart.filter(item => item.prodid !== prodId)); 
        setCartItems(cartItems.filter(item => item.prodid !== prodId)); 
      } else {
        console.error(data.message);
      }
    })
    .catch((error) => console.error(error));
  }
  
  

  return (
    <>
      <Navbar />
      <div className="CartMain">
        <h1 id="cartHeading">Cart</h1>
        <div className="cart" id="cart-head">
          <h2>Image</h2>
          <h2>Name</h2>
          <h2>Type</h2>
          <h2>Quantity</h2>
          <h2>Price</h2>
          <h2></h2>
        </div>

        <div className="cart-div">
          {cartItems.map((item) => {  
            return (
              <div className="cart" key={item.prodid}>
                <span><img src={require("../images/shop/" + item.prodImage)} alt="..." /></span>
                <span><h3>{item.prodName}</h3></span>
                <span>{item.prodCategory}</span>
                <span>{item.quantity}</span>
                <span><FaTags id="tag"/>{item.quantity * item.prodPrice}</span>
                <span><FaTrashAlt cursor="pointer" onClick={() => handleRemove(item.prodid)} /></span>
              </div>
            );
          })}
        </div>
        <div className="cart-btns">
          <Link to="/shop">Back to Shop</Link>
          <Link to="/checkout">Proceed to checkout</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}





