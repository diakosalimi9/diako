import "./textcctv.css"
import P from "../../atom/p/P"
import Span from "../../atom/span/Span"
import Icon from "../../atom/icon/Icon"
export default function TextCctv() {
    return (
        <div className="gap-10">
            <P classname={"text-fomtManeli"}>
                از هر جایی میتونی چک کنی!
            </P>
            <P classname={"boldtext"}>
                دوربین های مداربسته داهوا
            </P>
            <div className="flex">
                <Span classname={"textbold-700"}>خرید</Span>
                <Icon name={"arrow-left"}/>
            </div>
        </div>
    )
}