import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Hero() {
  const [index, setIndex] = useState();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        

        <img src="https://m.media-amazon.com/images/G/31/img21/MA2023/Oct/winter/store/main-scroll-pc._CB574359281_.gif" className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
        
        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/Event/MFD/Jan/Rec-PC._SX3000_QL85_.jpg" className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
        
        <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/AF/Winterwearflip/topheros/genz-pc._SX3000_QL85_.jpg" className="d-block w-100" alt="..." />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
