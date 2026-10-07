import { useState, useEffect } from "react";

import "./Home.css";
const images = [
  "./public/image1.jpg",
  "./public/image2.jpg",
  "./public/image3.jpg",
  "./public/image4.jpg",
];
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="container">
      <h1>Welcome to the Luxurious Fragrance Selection</h1>

      <p>
        Browse Through our curated collection! Designed to bring out your best
        self. Explore, indulge, and let your natural radiance bloom!
      </p>

      <div className="slider-wrapper">
      <img
        src={images[currentIndex]}
        alt={`slide ${currentIndex + 1}`}
        style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
        className="slider-image"
      />
      </div>

      <br />

      <h2>Hover your mouse over the cards.</h2>

      <div className="stack-row">
        <div className="stack">
          <div className="card c1"><img src="/image7.jpg" /></div>
          <div className="card c2"><img src="/image6.jpg" /></div>
          <div className="card c3"><img src="/image5.jpg" /></div>
        </div>

        <div className="stack">
          <div className="card c1"><a href="#"><img src="/image1.jpg" /></a></div>
          <div className="card c2"><img src="/image2.jpg" /></div>
          <div className="card c3"><img src="/image3.jpg" /></div>
        </div>
      </div>
    </div>
  );
}
