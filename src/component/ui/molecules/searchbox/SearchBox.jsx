// import InputSearch from "../../atom/input/InputSearch"
import InputSearch from "../../atom/input/InputSearch"
import BtnSearchBox from "../btnsearch/BtnSearchBox"
import "./searchbox.css"
export default function SearchBox(){
    return (
        <div className="searchbox">
            <BtnSearchBox></BtnSearchBox>
            <div className="b-search"><InputSearch placeholder={"محصول مورد نظر را جستجو کنید"}/></div>
            <div></div>
        </div>
    )
}