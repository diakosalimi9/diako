import P from "../../atom/p/P"
import Span from "../../atom/span/Span"
import Button from "../../atom/button/Button"
import "./slidesdp.css"
export default function SlidesDp({ classname, img, titleFa, titleEn, price }) {
    return (
        <div className={classname}>

            <div className={"none"}>شگفت انگیز های دیتا پرژکتور</div>

            <div className="box-img">
                <img src={img} />
            </div>
            <div className="title-slide">
                <P>{titleFa}</P>
                <P>{titleEn}</P>
                <Span>{price}</Span>
            </div>
            <div className="btn-addcart">
                <Button >افزودن به سبد خرید</Button>
            </div>
        </div>
    )
}