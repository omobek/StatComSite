import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './img/img_11.png';
import image2 from './img/img_12.png';
import image3 from './img/img_10.png';
import mod from './carosel.module.scss'

const CarouselContainer = () => {
  return (
    <div className={mod.carousel}>
    <Carousel fade={true} pause={false}>

      <Carousel.Item interval={2000}>
        <div className={mod.fon}><img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        </div>

        <Carousel.Caption>
          <h3>Национальная стратегия устойчивого развития</h3>
          <p>Указ президента Кыргызской Республики о Национальной стратегии развития Кыргызской Республики на 2018-2040 годы.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className={mod.fon}><img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        /></div>

        <Carousel.Caption>
          <h3>Цели устойчивого развития</h3>
          <p>Показатели целей в области устойчивого развития Кыргызской Республики</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Общественное обсуждение</h3>
          <p>Единый портал общественного обсуждения проектов нормативных правовых актов Кыргызской Республики</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>

    </div>
  )
}

export default CarouselContainer;