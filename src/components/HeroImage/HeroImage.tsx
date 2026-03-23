import React from "react";
import "./HeroImage.css";

interface HeroImageProps {
  src: string;
  alt: string;
}

function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="hero-container">
      <img src={src} alt={alt} className="hero-img" />
    </div>
  );
}

export default HeroImage;
