import LoginCart from "../../molecules/logincart/LoginCart";
import Logo from "../../molecules/Logo/Logo";
import Links from "../../molecules/navbar-links/Links";
import PIcon from "../../molecules/p-icon/PIcon";
import SearchBox from "../../molecules/searchbox/SearchBox";
import TxtNumber from "../../molecules/textPhonNumber/TxtNumber";
import "./header1.css"
export default function Header1() {
    return (
        <>
            <div className="header1">
                <div className="content">
                    <PIcon text={"آدرس : شیراز، ملاصدرا، خیابان معدل، ساختمان ۵"} nameicon={"addressicon"} />
                    <PIcon text={"ایمیل : meymandiarman@gmail.com"} nameicon={"email"} />
                    <TxtNumber />
                </div>
            </div>
            <div className="header2">

                <Logo/>
                <SearchBox />
                <LoginCart />
            </div>
            <div className="navbar">
                <Links></Links>
            </div>
        </>
    )
}