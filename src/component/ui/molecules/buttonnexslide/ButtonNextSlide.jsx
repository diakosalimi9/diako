import { React } from 'react';
import { useSwiper } from 'swiper/react';
import Button from '../../atom/button/Button';
import Icon from '../../atom/icon/Icon';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <Button onClick={() => swiper.slideNext()} classname={"btn-next-slide"}>
      <Icon name={"btn-arrow-left"}/>
    </Button>
  );
}