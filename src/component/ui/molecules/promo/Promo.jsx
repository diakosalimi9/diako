import Icon from "../../atom/icon/Icon";
import Img from "../../atom/img/Img";
import P from "../../atom/p/P";
import "./promo.css"
export default function Promo() {
    return (
        <div className="promo">
            <div className="promo-right">
                <div className="title">
                    <P>جدیدترین محصولات دیجیتال</P>

                    <Icon name={"arrow-left3"} />
                </div>
                <div className="box-images-promo">
                    <Img Src={"src/assets/images/pinkgold1.png"} />
                    <Img Src={"src/assets/images/samsung-galax.png"}/>
                </div>
            </div>
            
            <div className="promo-left">
                <div className="box-images-promo">
                    <Img Src={"src/assets/images/camer.png"} />
                    <Img Src={"src/assets/images/projecktor.png"}/>
                </div>
                <div className="title">
                    <P>جدیدترین محصولات دیجیتال</P>

                    <Icon name={"arrow-left3"} />
                </div>
            </div>
        </div>
    )
}