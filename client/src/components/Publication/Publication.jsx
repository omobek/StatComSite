import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import PublicationItem1 from "./PublicationItem1";
import PublicationItem2 from "./PublicationItem2";
import PublicationItem3 from "./PublicationItem3";
import PublicationItem4 from "./PublicationItem4";
import PublicationItem5 from "./PublicationItem5";
import PublicationItem6 from "./PublicationItem6";
import PublicationItem7 from "./PublicationItem7";
import mod from './Publication.module.scss'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './Publication.module.scss';



// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default ()=> {
  // const images = [img1,img2,img3,img4,img5,img6,img7];

  return (
    <div className={mod.slider} >
      <div className={mod.title}>Публикации</div>
    <div className={mod.container}>


    <Swiper
      // spaceBetween={30}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

      <SwiperSlide><PublicationItem1/></SwiperSlide>
      <SwiperSlide><PublicationItem2/></SwiperSlide>
      <SwiperSlide><PublicationItem3/></SwiperSlide>
      <SwiperSlide><PublicationItem4/></SwiperSlide>
      <SwiperSlide><PublicationItem5/></SwiperSlide>
      <SwiperSlide><PublicationItem6/></SwiperSlide>
      <SwiperSlide><PublicationItem7/></SwiperSlide>

      ...
    </Swiper>
    </div>
      <div className={mod.button}>
        <div className={mod.btn}>
          <ShoppingCartIcon/>
          Электронный магазин
        </div>

      </div>
    </div>
  );
};