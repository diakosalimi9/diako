import Icon from "../../atom/icon/Icon";
import P from "../../atom/p/P";
import "./PIcon.css"
export default function PIcon({text , nameicon}){
    return (
        <div className="content-pi">
            <div className="icon"><Icon name={nameicon}/></div>
            <div><P classname={"p-header"}>{text}</P></div>
        </div>
    )
}