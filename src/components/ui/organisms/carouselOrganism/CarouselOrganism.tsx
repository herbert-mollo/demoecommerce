import React, { useState, useEffect, useCallback } from 'react';

import { Button } from 'semantic-ui-react';

import './carouselOrganism.css';
const CarouselOrganism = ({ images, interval = 4000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(goToNextImage, interval);
    return () => {
      clearInterval(intervalId);
    };
  }, [interval, goToNextImage]);

  return (
    <div className="carousel">
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Carousel img ${index}`}
            height='300px'
            width='100%'
            className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <Button className='carousel-btn-left' onClick={goToPreviousImage} icon='arrow left' basic size='massive' />
      <Button className='carousel-btn-right'onClick={goToNextImage} icon='arrow right' basic size='massive' />
    </div>
  );
};

export default CarouselOrganism;