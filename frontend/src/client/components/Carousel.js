import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // You need to install this library
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="rounded-lg shadow-lg">
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/02/06/08/08/blog-625833_1280.jpg" alt="Slide 1" />
        <p className="legend">Discover Our Latest Posts</p>
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2017/05/30/03/58/blog-2355684_1280.jpg" alt="Slide 2" />
        <p className="legend">Explore Tech Insights</p>
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2018/05/08/15/28/blog-3383287_1280.jpg" alt="Slide 3" />
        <p className="legend">Stay Updated With Trends</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
