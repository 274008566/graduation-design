import React from 'react';
import Carousel from 'bee-carousel';
import 'bee-carousel/build/Carousel.css';

class CarouselMent extends React.Component {
  render() {
    const params = {
      pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
      },
      autoplay:{
        delay: 3000,
        disableOnInteraction: false
      },
      spaceBetween: 30,
      loop : true,
      effect : 'fade',
    }

    return(
        <div className="carousel-demo-two">
            <Carousel {...params}>
                <div className="carousel-demo-1">
                    <img src={require('../../assets/images/banner0.png')}/>
                </div>
                <div className="carousel-demo-2">
                    <img src={require('../../assets/images/banner1.jpg')}/>
                </div>
                <div className="carousel-demo-3">
                    <img src={require('../../assets/images/banner3.jpg')}/>
                </div>
            </Carousel>
        </div>
    )
  }
}

export default CarouselMent;