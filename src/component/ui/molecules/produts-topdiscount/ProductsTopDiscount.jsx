import Button from "../../atom/button/Button"
import Img from "../../atom/img/Img"
import P from "../../atom/p/P"
import Span from "../../atom/span/Span"
import "./productstopdiscount.css"
const productstopdiscount = [
    { img: "src/assets/images/ipad.png", titleFa: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت", titleEn: "Apple Ipad Mini 2021 (wifi)", price: "54/000 تومان" },
    { img: "src/assets/images/Airpod1.png", titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "54/000 تومان" },
    { img: "src/assets/images/Airpod1.png", titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "54/000 تومان" },
    { img: "src/assets/images/ipad.png", titleFa: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت", titleEn: "Apple Ipad Mini 2021 (wifi)", price: "54/000 تومان" },
    { img: "src/assets/images/Airpod1.png", titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "54/000 تومان" },
    { img: "src/assets/images/Airpod1.png", titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "54/000 تومان" },
]
export default function ProductsTopDiscount() {
    return (
        <div className="products-discount-top">
            {productstopdiscount.map((item , index)=>(
                
            <div className="boxes-newproduct" key={index}>
                <Img Src={item.img} />
                {/* <Img Src={"src/assets/images/r.png"} /> */}
                <div className="title-slide">
                    <P>{item.titleFa}</P>
                    <P>{item.titleEn}</P>
                    <Span>{item.price}</Span>
                </div>
                <div className="btn-addcart">
                    <Button>افزودن به سبد خرید</Button>
                </div>
            </div>
            ))}

        </div>
    )
}