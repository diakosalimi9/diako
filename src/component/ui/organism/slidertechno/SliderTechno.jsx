import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "./slider.css"
import SlidesTechno from "../../molecules/slidestechno/SlidesTechno";
import SlideNextButton from "../../molecules/buttonnexslide/ButtonNextSlide";
import SlidePrevButton from "../../molecules/slideprevbutton/SlidePrevButton";
const slides = [
    { nameicom: "cctvcamera", text: "دوربین مداربسته" },
    { nameicom: "tv", text: "مانیتور" },
    { nameicom: "dp", text: "دیتا پروژکتور" },
    { nameicom: "watch", text: "ساعت هوشمند" },
    { nameicom: "band", text: "اسپیکر پرتابل" },
    { nameicom: "camera", text: "دوربین عکاسی" },
]
export default function SliderTechno() {
    return (
        <div className="slider">
            <div className="slider-wrapper">
                <Swiper
                    modules={[Navigation, Keyboard]}
                    slidesPerView={6}
                    initialSlide={2}
                    spaceBetween={1}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: true,
                        pageUpDown: true,
                    }}
                    autoplay={
                        { delay: 1000 }
                    }
                    dir="rtl"
                    centeredSlides={true}
                    className="s"
                >
                    {slides.map((item, index) => (
                        <SwiperSlide key={index}>
                            {/* <button onClick={()=>console.log(index)}> on</button> */}
                            {({ isActive }) => (
                                <SlidesTechno classname={isActive ? 'slide active' : 'slide'} nameicom={item.nameicom} text={item.text} />
                            )}

                            {/* <div>Current slide is {isActive ? 'active' : 'not active'}</div> */}
                        </SwiperSlide>
                    ))}
                    <SlidePrevButton />
                    <SlideNextButton />
                </Swiper>
            </div>
        </div>
    )

}