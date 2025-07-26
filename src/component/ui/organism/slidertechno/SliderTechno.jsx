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
    // const [activeSlide, setActiveSlide] = useState(null)
    return (
        <div className="slider">
            <div className="slider-wrapper">
                <Swiper
                    modules={[Navigation, Keyboard]}
                    // navigation
                    navigation
                    slidesPerView={6}
                    centeredSlides={true}
                    initialSlide={2}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: true,
                        pageUpDown: true,
                    }}
                    autoplay={
                        { delay: 1000 }
                    }
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
                    <SlideNextButton />
                    <SlidePrevButton />
                </Swiper>
            </div>
        </div>
    )

}