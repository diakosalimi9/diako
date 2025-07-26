
import Button from "../../atom/button/Button"
import Icon from "../../atom/icon/Icon"
import Span from "../../atom/span/Span"
import "./slides.css"
export default function SlidesTechno({classname, nameicom , text}) {
    return (
        <div className={classname}>
            <div className={`box-btn `}>
                <Button classname={"btn-slide"}><Icon name={nameicom} /></Button>
            </div>
            <Span >{text}</Span>
        </div>
    )
}