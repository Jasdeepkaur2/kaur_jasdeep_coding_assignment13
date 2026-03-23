import React from "react";

interface ImgProps {
  src: string;
  alt: string;
  width?: string;
}

function Img({ src, alt, width }: ImgProps) {
  return <img src={src} alt={alt} width={width} />;
}

export default Img;
