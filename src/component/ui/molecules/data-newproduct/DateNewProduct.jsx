import Button from "../../atom/button/Button"
import Img from "../../atom/img/Img"
import P from "../../atom/p/P"
import Span from "../../atom/span/Span"
import "./DateNewProduct.css"
const datacategory = [
    [
        { img: "src/assets/images/ipad.png", titleFa: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت", titleEn: "Apple Ipad Mini 2021 (wifi)", price: "54/000 تومان" },
        { img: "src/assets/images/Airpod1.png", titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "54/000 تومان" },
        { img: "src/assets/images/Airpod1.png", titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "54/000 تومان" },
    ],
    [
        { img: "src/assets/images/Airpod1.png",titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "54/000 تومان" },
        { img: "src/assets/images/Airpod1.png",titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "54/000 تومان" },
        { img: "src/assets/images/Airpod1.png",titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "54/000 تومان" },
    ],
    [
        { img: "src/assets/images/Airpod1.png",titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "54/000 تومان" },
        { img: "src/assets/images/Airpod1.png",titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "54/000 تومان" },
        { img: "src/assets/images/Airpod1.png",titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "54/000 تومان" },
    ],
    [
        { img: "src/assets/images/Airpod1.png",titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "54/000 تومان" },
        { img: "src/assets/images/Airpod1.png",titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "54/000 تومان" },
        { img: "src/assets/images/Airpod1.png",titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "54/000 تومان" },
    ],
    [
        { img: "src/assets/images/Airpod1.png",titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "54/000/000 تومان" },
        { img: "src/assets/images/Airpod1.png",titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "6/000/000 تومان" },
        { img: "src/assets/images/Airpod1.png",titleFa: "هدفون بلوتوثی اپل مدل AirPods Max", titleEn: "Apple AirPods Max Bluetooth", price: "50/000/000 تومان" },
    ],
]
export default function DateNewProduct({ active }) {
    return (
        <>
            {datacategory[active].map((item) => (
                <>
                    <div className="boxes-newproduct">
                        <Img Src={item.img} />
                        <div className="title-slide">
                            <P>{item.titleFa}</P>
                            <P>{item.titleEn}</P>
                            <Span>{item.price}</Span>
                        </div>
                        <div className="btn-addcart">
                            <Button >افزودن به سبد خرید</Button>
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}