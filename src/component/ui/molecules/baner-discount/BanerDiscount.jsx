import Icon from "../../atom/icon/Icon"
import Img from "../../atom/img/Img"
import Span from "../../atom/span/Span"
import "./banerdiscount.css"
export default function BanerDiscount() {
    return (
        <div className="banerdiscount">
            <Img Src={"src/assets/images/unnamed2.png"} />
            <Img Src={"src/assets/images/iphones.png"} />
            <div className="text-banerdiscount">
                <Span>تا ۳۰٪ تخفیف</Span>
                <Span>آیفون و آیپد</Span>
                <Icon name={"vectore"} />
            </div>
        </div>
    )
}