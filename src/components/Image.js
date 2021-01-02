import React from "react";

const Image = ({ src, alt, title, size }) => {
  return <img src={src} alt={alt} title={title} width={size} />;
};

export default Image;
