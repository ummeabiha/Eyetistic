import { useEffect, useState } from 'react';
import axios from 'axios';
import HomeShop from './HomeShop';
import ShopSub from './ShopSub';

export default function NewArrival(){
    const [Arr, setArr] = useState([]);

    useEffect(() => {
        axios.get("http://localhost/eyetistic/newarrivals.php").then((response) => {
          setArr(response.data);
          console.log(response.data);
        });
      }, []);

    const recent = Arr.slice(-8);

    return(
        <div className="category">
            <div className="cat-head">
                <h1>New Arrivals</h1>
                <h3>Introducing our Shop's Captivating New Arrivals</h3>
            </div>

            <HomeShop product = {Arr.slice(0, 3)}/>
            <ShopSub product = {Arr.slice(3, 8)}/>
        </div>
    );
}