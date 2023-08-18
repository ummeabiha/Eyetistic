import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AlertBox from "../AlertBox";

const Email = localStorage.getItem("Email");

export default function Logout() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const nav = useNavigate();
  useEffect(() => {
    axios
      .post("http://localhost/eyetistic/emptyCart.php", { Email: Email })
      .then((response) => {
        console.log(response.data);
      });
      setAlertMessage("Logging Out");
      setIsAlertOpen(true);
      setTimeout(() => {
        setIsAlertOpen(false); 
        nav("/");
        }, 1000); 
      localStorage.clear();
  });

  return(<><AlertBox open={isAlertOpen} onClose={closeAlert}>
    {alertMessage}
  </AlertBox></>
  );
}


