import Img from "../../atom/img/Img"
import Li from "../../atom/Li/Li"
import UL from "../../atom/ul/UL"
import "./laptops.css"
const linklist = [
    ["مک بوک", "مک بوک پرو ۲۰۲۳", "مک بوک پرو ۲۰۲۳", "مک بوک ایر", "مک بوک ایر"],
    ["آیفون", "آیفون ۱۴ پرو مکس", "آیفون ۱۴", "لوازم جانبی آیفون", "لوازم جانبی آیفون"],
    ["آی مک", "آی مک ۲۰۲۲", "آی مک ۱۶ اینچی", "لوازم جانبی آی مک", "مک مینی"]
]
export default function Laptops() {
    return (
        <div className="mainbox-laptops">
            <div className="container-laptops">
                <div className="img-laptops">
                    <Img Src={"src/assets/images/mac-compare.png"} />
                </div>
                <div className="list-likslaptops">
                    {linklist.map((item, index) => (
                        <UL key={index} classname={"box-listlaptop"}>
                            {item.map((item, index) => (
                                <Li classname={index === 0 ?"li-category":""}>{item}</Li>
                            ))}
                        </UL>
                    ))}
                </div>
            </div>
        </div>
    )
}