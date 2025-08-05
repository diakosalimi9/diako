import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination } from "swiper/modules";
import ArticlesContent from "../../molecules/articlescontent/Articlesontent";
import P from "../../atom/p/P";

import "./LastArticles.css"

const dataArticles = [
    { img: "src/assets/images/unsplash.png", title: "آپدیت جدید اینستاگرام منتشر شد معرفی قابلیت های اینستاگرام.", discription: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان است، چاپگرها...." },
    { img: "src/assets/images/mobileimage.png", title: "هر رنگ نشانه چیست؟ چطور باید انتخاب رنگ مناسبی داشته باشیم؟", discription: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان است، چاپگرها...." },
    { img: "src/assets/images/laptoptiktok.png", title: "همه چیز درباره تولید محتوا وبسایت، معرفی ۶ اصل مهم.", discription: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان است، چاپگرها...." },
]
export default function LastArticles() {
    return (
        <div className="mainbox-lastarticles">
            <div className="content-articles">
                <div className="title-boxarticles"><P>آخرین مقالات</P></div>
                <div className="slider-artilcles">
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={3}
                        initialSlide={1}
                        pagination={{
                            clickable: true,
                            type: 'bullets',
                        }}
                        centeredSlides
                    >
                        {dataArticles.map((item, index) => (
                            <SwiperSlide key={index}>
                                <ArticlesContent img={item.img} title={item.title} discription={item.discription} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}