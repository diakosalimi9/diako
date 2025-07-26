import Button from "../../atom/button/Button";
import Icon from "../../atom/icon/Icon";
import "./btnsearch.css"
export default function BtnSearchBox() {
    return (
        <div>
            <Button classname={"btn"}><Icon name={"searchicon"}/></Button>
        </div>
    )
}