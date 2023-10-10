import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerSlider = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
      <div>
        <img src="https://i.ibb.co/BfTyn66/markus-spiske-Mb-G7kw-Wpt-II-unsplash.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/PQGNSty/27644.jpg" alt="Banner 2" />
      </div>
      <div>
        <img src="/images/banner3.jpg" alt="Banner 3" />
      </div>
      <div>
        <img src="/images/banner4.jpg" alt="Banner 4" />
      </div>
    </Carousel>
  );
};

export default BannerSlider;
