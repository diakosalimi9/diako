import "./sliderdp.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "./sliderdp.css"

import band from "../../../../assets/images/band.png"
import SlidesDp from "../../molecules/slidesdp/SlidesDp";
import TextDp from "../../molecules/texticondp/TextDp";
import Text2Dp from "../../molecules/text2dp/Text2Dp";

const slidesDp = [
    { img: { band }, titleFa: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت", titleEn: "Apple Ipad Mini 2021 (wifi)", price: "۱۰/۲۹۹/۰۰۰ تومان" },
    { img: { band }, titleFa: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت", titleEn: "Apple Ipad Mini 2021 (wifi)", price: "۵۴/۲۰۰ تومان" },
    { img: { band }, titleFa: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت", titleEn: "Apple Ipad Mini 2021 (wifi)", price: "۵۴/۲۰۰ تومان" },
    { img: { band }, titleFa: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت", titleEn: "Apple Ipad Mini 2021 (wifi)", price: "۵۴/۲۰۰ تومان" },
    { img: { band }, titleFa: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت", titleEn: "Apple Ipad Mini 2021 (wifi)", price: "۱۰/۲۹۹/۰۰۰ تومان" },
    { img: { band }, titleFa: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت", titleEn: "Apple Ipad Mini 2021 (wifi)", price: "۵۴/۲۰۰ تومان" },
    { img: { band }, titleFa: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت", titleEn: "Apple Ipad Mini 2021 (wifi)", price: "۵۴/۲۰۰ تومان" },
    { img: { band }, titleFa: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت", titleEn: "Apple Ipad Mini 2021 (wifi)", price: "۵۴/۲۰۰ تومان" },
]
export default function SliderDP() {

    return (
        <div className="mainbox-sliderdp">
            <div className="container-sliderdp">

                <div className="b">
                    <TextDp />
                    <Text2Dp />
                </div>

                <Swiper
                    modules={[Navigation,Keyboard,Autoplay]}
                    navigation
                    spaceBetween={10}
                    slidesPerView={4}
                    loop
                    className="swiper-s"
                    keyboard={{
                        enabled: true,
                        onlyInViewport: true,
                        pageUpDown: true,
                    }}
                >

                    {slidesDp.map((item, index) => (
                        <SwiperSlide>
                            {({ isActive }) => (
                                <SlidesDp key={index} classname={isActive ? "box-silde-dp activslide" : "box-silde-dp"} img={item.img} titleFa={item.titleFa} titleEn={item.titleEn} price={item.price} />
                            )}
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </div>
    )
}