import Button from "../../atom/button/Button";
import Icon from "../../atom/icon/Icon";
import P from "../../atom/p/P";
import LinkPages from "../linkpages/LinkPages";
import "./links.css"
export default function Links() {
    return (
        <div className="btn-submenu">
            <Button classname={"submenu"}>
                <Icon name={"submenu"} />
                <P classname={"text-submenu"}>دسـته بـندی محـصولات</P>
            </Button>
            <div className="link-pages">
                <LinkPages></LinkPages>
            </div>
        </div>
    )
}