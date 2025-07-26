import BtnSearchBox from "../../molecules/btnsearch/BtnSearchBox"
import LoginCart from "../../molecules/logincart/LoginCart"
import Logo from "../../molecules/Logo/Logo"
import SearchBox from "../../molecules/searchbox/SearchBox"
import "./header2.css"
export default function Header2() {
    return (
        <div className="header2">

            <Logo></Logo>
            <SearchBox></SearchBox>
            <LoginCart></LoginCart>
        </div>
    )
}