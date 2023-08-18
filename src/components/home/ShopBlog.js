import eye from '../images/style-eye.png';
import blog from '../images/style-blog.png';
import {Link} from "react-router-dom";

export default function ShopBlog(){
    return(
        <>
        <div className="style">
            <div className="style-sub">
                <img className="image" src={eye}></img>
                <div>
                    <h2>NEW STYLES & ARRIVALS</h2>
                    <Link to="/shop" className="style-btn">SHOP NOW</Link>
                </div>
            </div>

            <div className="style-sub">
                <div>
                    <h2>INSIGHTFUL BLOGS</h2>
                    <Link to="/blogs" className="style-btn">READ NOW</Link>
                </div>
                <img className="image" src={blog}></img>
            </div>

        </div>
        </>
    )
}