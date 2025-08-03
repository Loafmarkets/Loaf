import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const CarouselSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  pointer-events: ${props => (props.active ? 'auto' : 'none')};
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed) ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const CarouselControls = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  z-index: 10;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const CarouselDot = styled.button`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${props => (props.active ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.5)')};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin: 0 2px;
  
  &:hover {
    transform: scale(1.2);
  }
  
  &:focus {
    outline: none;
  }
`;

const CarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 0.5rem;' : 'right: 0.5rem;'}
  background-color: transparent;
  color: white;
  border: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  &:focus {
    outline: none;
  }
  
  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5));
  }
`;

const MediaTypeContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
  z-index: 5;
`;

const MediaTypeButton = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  opacity: ${props => props.active ? 1 : 0.7};
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  svg {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5));
  }
`;

const ImageCarousel = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mediaType, setMediaType] = useState('image'); // 'image', 'video', 'ar'
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  const handleMediaTypeChange = (type) => {
    setMediaType(type);
    // In a real implementation, this would switch between different media types
    // For now, we'll just log the change
    console.log(`Switching to media type: ${type}`);
  };
  
  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <CarouselSlide key={index} active={index === currentIndex}>
          <CarouselImage src={image} alt={`${alt} - View ${index + 1}`} />
        </CarouselSlide>
      ))}
      
      <CarouselArrow direction="left" onClick={goToPrev}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </CarouselArrow>
      
      <CarouselArrow direction="right" onClick={goToNext}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </CarouselArrow>
      
      <MediaTypeContainer>
        <MediaTypeButton 
          active={mediaType === 'image'} 
          onClick={() => handleMediaTypeChange('image')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 5h16v14H4V5zm15 13V6H5v12h14zM7 13l3-3 2 2 3-3 2 2v3H7v-1z"></path>
          </svg>
        </MediaTypeButton>
        
        <MediaTypeButton 
          active={mediaType === 'video'} 
          onClick={() => handleMediaTypeChange('video')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5V9.5l6 3.5-6 3.5z"></path>
          </svg>
        </MediaTypeButton>
        
        <MediaTypeButton 
          active={mediaType === 'ar'} 
          onClick={() => handleMediaTypeChange('ar')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
            <path d="M12 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4V6z"></path>
            <path d="M18 12a6 6 0 0 0-6-6v2a4 4 0 0 1 4 4h2z"></path>
          </svg>
        </MediaTypeButton>
      </MediaTypeContainer>
      
      <CarouselControls>
        {images.map((_, index) => (
          <CarouselDot 
            key={index} 
            active={index === currentIndex} 
            onClick={() => goToSlide(index)}
          />
        ))}
      </CarouselControls>
    </CarouselContainer>
  );
};

export default ImageCarousel;
