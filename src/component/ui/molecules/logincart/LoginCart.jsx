import Icon from "../../atom/icon/Icon"
import LoginBtn from "../loginbtn/loginbtn"
import "./logincart.css"
export default  function LoginCart(){
    return(
        <div className="logincart">
            <div><Icon name={"bagcart"}/></div>
            <div><LoginBtn></LoginBtn></div>
            <div><Icon name={"hearticon"}/></div>
        </div>
    )
}