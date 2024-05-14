import React, { useState } from 'react';
import './Slider.css'; // Import your CSS file with slider styles

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="prev-btn">&#10094;</button>
      <button onClick={nextSlide} className="next-btn">&#10095;</button>
      {images.map((image, index) => (
        <div key={index} className={index === currentImageIndex ? 'slide active' : 'slide'}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
