import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Favourite from './components/favourite/Favourite';
import Gallery from './components/gallery/Gallery';
import CheckoutForm from './components/cart/CheckoutForm';
import Signup from './components/intro/Signup';
import { Login } from './components/intro/Login';
import Video from './components/shop/video';
import ForgotPassword from './components/intro/ForgotPassword';
import ForgotPassword2 from './components/intro/ForgotPassword2';
import Shop from './components/shop/Shop';
import Blog3 from './components/blogs/blog3';
import Blog1 from './components/blogs/Blog1';
import Blog2 from './components/blogs/blog2';
import Main from './components/blogs/Main';
import NewWebDesign from './components/blogs/Blog';
import LatestInTown from './components/blogs/latestintown';
import Blog4 from './components/blogs/blog4';
import Logout from "./components/intro/Logout";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<div><Video/><Login/></div>}></Route>
          <Route exact path="/signup" element={<div><Video/><Signup/></div>}></Route>
          <Route exact path="/forgotPassword_pg_1" element={<div><Video /><ForgotPassword /></div>}></Route>
          <Route exact path="/forgotPassword_pg_2" element={<div><Video /><ForgotPassword2 /></div>}></Route>
          <Route exact path="/logout" element={<Logout/>}></Route>

          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/gallery/:prodid" element={<Gallery/>} />
          <Route path="/shop" element={<Shop/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route exact path="checkout" element={<CheckoutForm/>}></Route>
          <Route path='/favourite' element={<Favourite/>}/>

          <Route exact path="/blogs" element={<div className="website"><Main/><NewWebDesign/><LatestInTown/></div>}/>
          <Route exact path="/blog1" element={<Blog1/>}/>
          <Route exact path="/blog2" element={<Blog2/>}/>
          <Route exact path="/blog3" element={<Blog3/>}/>
          <Route exact path="/blog4" element={<Blog4/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}


