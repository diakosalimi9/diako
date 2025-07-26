import PIcon from "../../molecules/p-icon/PIcon";
import TxtNumber from "../../molecules/textPhonNumber/TxtNumber";
import "./header1.css"
export default function Header1() {
    return(
        <div className="header1">
            <div className="content">
                <PIcon text={"آدرس : شیراز، ملاصدرا، خیابان معدل، ساختمان ۵"} nameicon={"addressicon"}/>
                <PIcon text={"ایمیل : meymandiarman@gmail.com"} nameicon={"email"}/>
                <TxtNumber />
            </div>
        </div>
    )
}