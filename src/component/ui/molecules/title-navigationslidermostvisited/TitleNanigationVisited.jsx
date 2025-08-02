import "swiper/css"
import "swiper/css/navigation"
import Img from "../../atom/img/Img";
import Button from "../../atom/button/Button";
import Span from "../../atom/span/Span";
import P from "../../atom/p/P"
import "./TitleNanigationVisited.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination } from "swiper/modules"
import SlidePrevButton from "../slideprevbutton/SlidePrevButton";
import SlideNextButton from "../buttonnexslide/ButtonNextSlide";
import { useState } from "react";
// import { Pagination } from 'swiper';
const dataslidermostvisited = [
    { img: "src/assets/images/r.png", pricoffdiscount: "تا ۲۵٪ تخفیف", title: "انواع اینورتر رونیکس" },

    { img: "src/assets/images/r.png", pricoffdiscount: "تا ۲۵٪ تخفیف", title: "انواع اینورتر رونیکس" },
    { img: "src/assets/images/cup.png", pricoffdiscount: "تا ۳۰٪ تخفیف", title: "کلاه شنا سیلیکونی" },
    { img: "src/assets/images/swimingshoes.png", pricoffdiscount: "تا ۳۰٪ تخفیف", title: "انواع پاورفین" },
    { img: "src/assets/images/r.png", pricoffdiscount: "تا ۳۰٪ تخفیف", title: "کلاه شنا سیلیکونی" },
]
export default function TitleNanigationVisited() {
    
    return (
        <>
            <div className="slide-mostvisited">

                <Swiper
                    modules={[Pagination, Keyboard]}
                    slidesPerView={3}
                    pagination={{
                        clickable: true,
                        type: 'bullets',
                    }}
                    spaceBetween={20}
                    initialSlide={1}
                    className="slide-swiper-mostvisited"
                    keyboard={{
                        enabled: true,
                        onlyInViewport: true,
                        pageUpDown: true,
                    }}
                >
                    <div className="top-title">
                        <P>پربازدیدترین دسته بندی ها</P>

                    </div>
                    <SlidePrevButton icon={"right"} classN={"buttonprev-slide"} />
                    <SlideNextButton icon={"left"} classN={"buttonnext-slide"} />
                    {dataslidermostvisited.map((item, index) => (

                        <SwiperSlide className="customslide" key={index}>
                            <div className="c" >
                                <Img Src={item.img} />
                                <div className="div-content-text">
                                    <Span>{item.pricoffdiscount}</Span>
                                    <Span>{item.title}</Span>
                                    <Button>مشاهده همه</Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}