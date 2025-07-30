import Icon from "../../atom/icon/Icon";
import Img from "../../atom/img/Img";
import P from "../../atom/p/P";

export default function ContainerNewProduct() {
    return (
        <div>
            <div className="title">
                <P>جدیدترین محصولات دیجیتال</P>

                <Icon name={"arrow-left3"} />
            </div>
            <div className="imgbox-mouse">
                <Img Src={"src/assets/images/mouse.png"} />
            </div>
        </div>
    )
}