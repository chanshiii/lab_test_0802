import React from 'react'
import style from '../styles/test.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const news = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
  return (
        <Slider {...settings}>
        <div className={style.a}>
          <img src="https://gsacademy.jp/uploads/hirotasan-eyecatch-720x720.jpeg" alt="Slide 1" />
        </div>
        <div className={style.a}>
          <img src="https://gsacademy.jp/uploads/3-4.png" alt="Slide 2" />
        </div>
        <div className={style.a}>
          <img src="https://gsacademy.jp/uploads/IMG_7963-720x720.jpg" alt="Slide 3" />
        </div>
      </Slider>
  )
}
export default news