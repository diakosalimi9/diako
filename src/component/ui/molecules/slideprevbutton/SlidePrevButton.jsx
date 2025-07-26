import { React } from 'react';
import { useSwiper } from 'swiper/react';
import Button from '../../atom/button/Button';
import Icon from '../../atom/icon/Icon';

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <Button onClick={() => swiper.slidePrev()} classname={"btn-prev-slide"}>
      <Icon name={"btn-arrow-right"}/>
    </Button>
  );
}