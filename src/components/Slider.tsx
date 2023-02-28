import React from 'react';
import Carousel from "react-material-ui-carousel";
import styles from '../styles/Carousel.module.css';
import { slider } from '../constants/sliderImage';
import Image from 'next/image';

const Slider = () => {
  return (
    <div className={styles.slider}>
      <Carousel navButtonsAlwaysInvisible={true} stopAutoPlayOnHover={false} indicators={false}>
        {slider.map((item) => (
          <div className={styles.slide_image} key={item.id}>
            <Image src={item.image} alt="slider-image" />

            <div className={styles.slider_text}>
              <h1>{item.headText1}</h1>
              <h2>{item.headText2}</h2>
              <h3>{item.lightText}</h3>
            </div>
            <div className={styles.gradient} />
          </div>
        ))}

      </Carousel>
    </div>
  )
}

export default Slider