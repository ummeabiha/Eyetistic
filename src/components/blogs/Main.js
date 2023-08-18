import React, { useRef } from "react";
import covervid from "../images/blogs.mp4";
import "./main.css";
import Navbar from "../navbar/Navbar";
import Scroll from "../scroll/Scroll";


export default function Main() {
  const newWebDesignRef = useRef(null);

  // const handleViewNowClick = () => {
  //   if (newWebDesignRef.current) {
  //     newWebDesignRef.current.scrollIntoView({
  //       bottom: 2000,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div>
      <Navbar />
      <section className="main-container">
        <div className="cover">
          {/* <video autoPlay muted loop> 
            <source src={covervid} type="video/mp4" />
          </video>

          <div className="main-cover">
            <div className="text">
              <h1>EYETISTIC BLOGS</h1>
              <p>
                Eyetistic aims to create a web platform where users not only
                buys high quality reasonable products but also gets access to
                informative blogs. Please give these Eyetistic blogs a read.
                HAPPY READING!
              </p>
            </div>

            <button className="button"><a href='#takearead'>VIEW NOW!</a></button> */}


            <div className="HeaderDiv">
            <video autoPlay muted loop>
            <source src={covervid} type="video/mp4" />
          </video>
            <div className="header" >
                <h1 id="mt-head-t">EYETISTIC BLOGS</h1>
                    <p id="mt-head-p">Eyetistic aims to create a web platform where users not only
                buys high quality reasonable products but also gets access to
                informative blogs. Please give these Eyetistic blogs a read.
                HAPPY READING!</p>
                <button className="mt-view-btn"><a id="color" href='#takearead'>VIEW NOW!</a></button>
            </div>
        </div> 

          </div>
        <section>
          <div ref={newWebDesignRef}></div>
        </section>
      </section>
      <Scroll/>
    </div>
  );
};


