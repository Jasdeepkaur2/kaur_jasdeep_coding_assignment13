// src/components/HeroImage/HeroImage.jsx
import React from "react";
import "./HeroImage.css";

function HeroImage({ src, alt }) {
  return (
    <div className="hero-container">
      <img src={src} alt={alt} className="hero-img" />
    </div>
  );
}

export default HeroImage;
