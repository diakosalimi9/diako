import Button from "../../atom/button/Button"
import P from "../../atom/p/P"
import Span from "../../atom/span/Span"
import CountDownTimer from "../countDownTimer/CountDownTimer"
import Icon from "../../atom/icon/Icon"

import "./sugesstioncontent.css"
import Img from "../../atom/img/Img"
import imgwatch from "../../../../assets/images/watch.png"


const data = [
    { img: "src/assets/images/watch.png", title: "fffffffffffffffff", price: "3/5۰۰/۰۰۰ تومان", timeoffprice: "2025-08-1" },
    { img: "src/assets/images/watch.png", title: "ساعت هوشمند سامسونگ مدل Galaxt Watch 5", price: "۴/۵۰۰/۰۰۰ تومان", timeoffprice: "2025-08-1" },
    { img: "src/assets/images/watch.png", title: "activslidactivslidactivslidactivslid", price: "3/۰۰۰/۰۰۰ تومان", timeoffprice: "2025-08-4" },
    { img: "src/assets/images/watch.png", title: "aaaaaaaaaaaaaaa", price: "3/5۰۰/۰۰۰ تومان", timeoffprice: "2025-09-1" },
]

export default function SugesstionContent({ activeslideb }) {
    const THREE_DAYS = new Date(data[activeslideb].timeoffprice).getTime();
    console.log(THREE_DAYS);

    return (
        <div className="k">
            <div className="box-img-s">
                <Img Src={data[activeslideb].img} />
            </div>
            <div className="p-offbtn">
                <P classname={"f20-b-y"}>{data[activeslideb].title}</P>
                <div className="offbtn">
                    <Span> ۵/۲۵۰/۰۰۰ تومان</Span>
                    <P>{data[activeslideb].price}</P>
                    <Button><Span>٪۱۵ تخفیف</Span></Button>
                </div>
            </div>
            <div className="timer-btnaddcart">
                <CountDownTimer targetDate={THREE_DAYS} />

                <Button><Icon name={"cart1"} /> مشاهده و خرید محصول</Button>
            </div>
        </div>
    )
}