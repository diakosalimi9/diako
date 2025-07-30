import Icon from "../../atom/icon/Icon"
import P from "../../atom/p/P"
import "./text2dp.css"
export default function Text2Dp() {
    return(
        <div className="text-icon-row">
            <P classname={"text-dp-sliderdp2"}>مشاهده همه</P>
            <Icon name={"arrowleft2"}/>
        </div>
    )
}