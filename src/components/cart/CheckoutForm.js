import React, { useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles.css";
import "../contact/Contact.css";
import AlertBox from "../AlertBox";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function CheckoutForm() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
  });

  var pattern = /^\d+$/;

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formData.Name === "" ||
      formData.Email === "" ||
      formData.Phone === "" ||
      formData.Address === ""
    ) {
      setAlertMessage("Input all the required fields");
      setIsAlertOpen(true);
    } else if (formData.Address.length >= 200) {
      setAlertMessage("Address should not exceed 200 words!");
      setIsAlertOpen(true);
    } else if (
      formData.Phone.length > 11 ||
      formData.Phone.length !== 11||
      pattern.test(formData.Phone) !== true
    ) {
      setAlertMessage("Invalid Contact Number!");
      setIsAlertOpen(true);
    } else {
      const payload = {
        ...formData,
        'LocalEmail': localStorage.getItem("Email"),
      };
      fetch("http://localhost/eyetistic/checkout.php", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setAlertMessage("Your Order Has Been Placed!");
            setIsAlertOpen(true);
            setTimeout(() => {
              setIsAlertOpen(false); 
              nav("/home");
            }, 1000); 
          } else {
            setAlertMessage("Can't Place Order!");
            setIsAlertOpen(true);
          }
        })
        .catch((error) => {
          setAlertMessage("Can't Place Order!");
          setIsAlertOpen(true);
          console.error("Error:", error);
        });
    }
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };


  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    fetch("http://localhost/eyetistic/generatebill.php", {
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
        setTotalCost(data.totalCost);
      })
      .catch(error => console.error('Error fetching total cost:', error));
  }, []);

  return (
    <div id="contact">
      <Navbar/>
      <div className="contact-head">
        <div id="content">
          <h1> Order Summary </h1>
          <p>Thank you for choosing us!</p>
          <h3>Net Amount: ${totalCost.toFixed(2)}</h3>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-fields">
              <h2>Place Order</h2>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Name"
                className="checkOutInput"
              />
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Email"
                className="checkOutInput"
              />
              <input
                type="text"
                name="Phone"
                value={formData.Phone}
                onChange={handleChange}
                placeholder="Phone"
                className="checkOutInput"
              />
              <input type="text" name="Address"
                value={formData.Address}
                onChange={handleChange}
                placeholder="Shipping Address"
                className="checkOutInput"
              />
              <div className='form-btns'>
                  <Link className="btn" to='/shop'>Keep Shopping</Link>
                  <input type='submit' className="btn" value="Confirm Order"/>
              </div>
            </div>
          </form>
          <AlertBox open={isAlertOpen} onClose={closeAlert}>
            {alertMessage}
          </AlertBox>
        </div>
      </div>
      <Footer/>
    </div>
  );}