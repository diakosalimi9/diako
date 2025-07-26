import { React } from 'react';
import { useSwiper } from 'swiper/react';
import Button from '../../atom/button/Button';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <Button onClick={() => swiper.slideNext()} classname={"btn-next-slide"}>Slide to the next slide</Button>
  );
}