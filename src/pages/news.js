import React from 'react'
import style from '../styles/test.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Header = () => {
  return (
    <div className={style.pokempn_logo}>
      <img src="https://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG5.png" alt="pokempn_logo" />
    </div>
  );
};

const news = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
  return (
    <div className="slider-container">
      {/* ヘッダーコンポーネントを呼び出し */}
      <Header />
        <Slider {...settings}>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/c76f18d4f7b5fd0e1b40adb0e953c1c7-500x500.png" alt="Slide 1" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/bc9073681c572d88ef894499faaa972d-1-500x500.png" alt="Slide 2" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/a85e6d3081954422129fc62b7cc9fdc9-500x500.png" alt="Slide 3" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/01ffb8fd942836f58b3e91073cebaafc-1-500x500.png" alt="Slide 4" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/97f356d28505eceb733ec654c8b85a24-500x500.png" alt="Slide 5" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/d612acb10b24f5aa139e8aea4a314a67-500x500.png" alt="Slide 6" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/5ccf6e2e26f452e94447baf97a29bffd-500x500.png" alt="Slide 7" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/5810efb9392d00e24d1b133ff4543289-500x500.png" alt="Slide 8" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/c4cb9e005fa68acbb85c529529f40619-500x500.png" alt="Slide 9" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/9fc9c1ac8b63e95a533e3eb094b09adc-600x600.png" alt="Slide 10" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/366f977ebd44b10c588f88e3ce2bcdd0-600x600.png" alt="Slide 11" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/80771b0bf995f017458f6ff4897ac3e4-600x600.png" alt="Slide 12" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/6da84f9136927208480e63d11dcdfe8f-600x600.png" alt="Slide 13" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/60b50f8c39ded0e1a878cc33895e7435-600x600.png" alt="Slide 14" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/88361ae5a8585ed5dbb99bbf5e1a0d7f-600x600.png" alt="Slide 15" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/6d3d57f8d047f90bf5b5d474d1145046-600x600.png" alt="Slide 16" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/2abbca09bc08a2936f9aab2f9c086f13-600x600.png" alt="Slide 17" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/3246886702f30146cf3aa6f9bb750801.png" alt="Slide 18" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/3665b07732d7a56e9ec4d1c7c1ac7aeb-600x600.png" alt="Slide 19" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/ae72bd1742d191edf4b05ea71bd22c0c-600x600.png" alt="Slide 20" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/1cff20d7c38abb2dcd1f68203ac74872.png" alt="Slide 21" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/18e252f293d4920772b86328e47bbf4c.png" alt="Slide 22" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/97782f293f6be5ee94fd07230b527078.png" alt="Slide 23" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/c900c03625e67d87ce8e4ec3f0588cc3.png" alt="Slide 24" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/2020/11/a67561f5d3d301b57deb4fae59b132f5.png" alt="Slide 25" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/2020/11/c95ecff29911b96d4319dd9f9753e420.png" alt="Slide 26" />
        </div>
        <div className={style.a}>
          <img src="https://trance-cell.com/wp-content/uploads/2020/11/c87adf7a38c327bbfdd7ddb0637e3db2.png" alt="Slide 27" />
        </div>
      </Slider>
    </div>
  )
}
export default news