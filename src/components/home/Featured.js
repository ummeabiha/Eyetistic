import { useEffect, useState } from 'react';
import axios from 'axios';
import HomeShop from './HomeShop';
import ShopSub from './ShopSub';

export default function Featured(){
    const [Arr, setArr] = useState([]);

    useEffect(() => {
        axios.get("http://localhost/eyetistic/featured.php").then((response) => {
          setArr(response.data);
          console.log(response.data);
        });
      }, []);

    return(
        <div className="category">
            <div className="cat-head">
                <h1>Featured</h1>
                <h3>Experience Perfection With our Shop's Featured Product</h3>
            </div>

            <HomeShop product = {Arr.slice(0, 3)}/>
            <ShopSub product = {Arr.slice(3, 8)}/>
        </div>
    );
}