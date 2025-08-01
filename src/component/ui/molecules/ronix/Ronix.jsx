import Icon from "../../atom/icon/Icon"
import Img from "../../atom/img/Img"
import P from "../../atom/p/P"
import "./ronix.css"
export default function Ronix(){
    return(
        <div className="conten-ronoxpromo">
            <div className="box-right-imagesronix">
                <Img Src={"src/assets/images/ronix-logo-header 1.png"}/>
                <div className="title">
                    <P>پرفروشترین محصولات رونیکس</P>

                    <Icon name={"arrow-left3"} />
                </div>
            </div>
            <div className="box-left-imagesronix">
                <Img Src={"src/assets/images/rh.png"}/>
                <Img Src={"src/assets/images/Ronix.png"}/>
                <Img Src={"src/assets/images/roni.png"}/>
            </div>
        </div>
    )
}