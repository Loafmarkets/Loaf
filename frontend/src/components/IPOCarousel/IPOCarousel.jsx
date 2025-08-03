import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${props => props.activeIndex * 100}%);
`;

const CarouselSlide = styled.div`
  flex: 0 0 100%;
  width: 100%;
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 0.5rem;
`;

const CarouselDot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'var(--color-accent)' : 'rgba(230, 200, 126, 0.3)'};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  padding: 0;
  margin: 0;
  
  &:hover {
    transform: scale(1.2);
  }
  
  &:focus {
    outline: none;
  }
`;

const IPOCarousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasScrolledOnce, setHasScrolledOnce] = useState(false);
  const slides = React.Children.toArray(children);
  const timerRef = useRef(null);
  
  const goToSlide = (index) => {
    setActiveIndex(index);
    // Reset the auto-scroll state if user manually navigates
    setHasScrolledOnce(true);
  };
  
  const goToNextSlide = () => {
    // Only scroll if we haven't scrolled once already
    if (!hasScrolledOnce) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setHasScrolledOnce(true);
    }
  };
  
  // Auto-slide effect - only once after 5 seconds
  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // Only set the timer if we haven't scrolled once already
    if (!hasScrolledOnce) {
      // Use setTimeout instead of setInterval since we only want to scroll once
      timerRef.current = setTimeout(() => {
        goToNextSlide();
      }, 5000);
    }
    
    // Cleanup function to clear timer when component unmounts
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [hasScrolledOnce, slides.length]);
  
  return (
    <div>
      <CarouselDots>
        {slides.map((_, index) => (
          <CarouselDot 
            key={index} 
            active={index === activeIndex} 
            onClick={() => goToSlide(index)}
          />
        ))}
      </CarouselDots>
      
      <CarouselContainer>
        <CarouselContent activeIndex={activeIndex}>
          {slides.map((slide, index) => (
            <CarouselSlide key={index}>
              {slide}
            </CarouselSlide>
          ))}
        </CarouselContent>
      </CarouselContainer>
    </div>
  );
};

export default IPOCarousel;
