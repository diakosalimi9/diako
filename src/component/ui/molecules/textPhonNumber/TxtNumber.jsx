import Icon from "../../atom/icon/Icon";
import P from "../../atom/p/P";
import Span from "../../atom/span/Span";
import "./txtnumber.css"
export default function TxtNumber(){
    return (
        <div className="content-pi">
            <div><Icon name={"numberphone"}/></div>
            <div>
                <P classname={"p-header"}>شماره تماس و پشتیبانی</P>
            </div>
            <div className="n-ltr">
                <P classname={"p-header number"}>۰۹۲۱ <Span classname={"span-number-white"}>۲۳۴ ۴۵۶۶</Span></P>
            </div>
        </div>
    )
}