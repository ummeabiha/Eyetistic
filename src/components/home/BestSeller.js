import { useEffect, useState } from 'react';
import axios from 'axios';
import HomeShop from './HomeShop';
import ShopSub from './ShopSub';


export default function BestSeller(){
    const [Arr, setArr] = useState([]);

    useEffect(() => {
        axios.get("http://localhost/eyetistic/bestSeller.php").then((response) => {
          setArr(response.data);
          console.log(response.data);
        });
      }, []);
    
    return (
        <div className="category">
            <div className="cat-head">
                <h1>Our Best Sellers</h1>
                <h3>Discover our Shop's Best-Selling Product</h3>
            </div>

            {/* <HomeGallery/> */}
            <HomeShop product={Arr.slice(0, 3)}/>
            <ShopSub product={ Arr.slice(3, 8)}/>
        </div>
    );
}

