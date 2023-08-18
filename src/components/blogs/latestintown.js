import React from "react";
import { Link } from "react-router-dom";
import "./latestintown.css";
import img1 from "../images/weird.jpg";
import img2 from "../images/Tändelei _ makeup.png";
import Footer from "../footer/Footer";

export default function LatestInTown() {
  const images = [
    {
      src: img1,
      description: "Nurturing healthy Vision",
      blog: "/blog4",
    },
    {
      src: img2,
      description: "Glaucoma Science",
      blog: "/blog2",
    },
  ];

  return (<>
    <section className="blog-trend">
      <h1 id="latest-heading">LATEST IN TOWN!</h1>
      <div className="blog-image-container">
        {images.map((image, index) => (
          <div className="blog-trendcard" key={index}>
            <div className="blog-trendcard-image">
              <img src={image.src} alt="Image" />
            </div>
            <div className="blog-trendcard-description">
              <p>{image.description}</p>
              <div className="blog-readmore-button">
                <Link to={image.blog}>Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
      <Footer/></>
  );
};


