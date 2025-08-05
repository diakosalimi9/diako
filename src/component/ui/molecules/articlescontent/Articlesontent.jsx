import Icon from "../../atom/icon/Icon"
import Img from "../../atom/img/Img"
import P from "../../atom/p/P"
import Span from "../../atom/span/Span"
import "./articlescontent.css"
export default function ArticlesContent({img, title, discription}){
    return(
        <div className="cart-article">
            <Img Src={img}/>
            <div className="content-article">
                <P>{title}</P>
                <P><Span>۲۲</Span> خرداد ۱۴۰۲</P>
                <P>{discription}</P>
                <div className="message-morediscrip">
                    <Icon name={"message"} />
                    <Icon name={"d"} />

                </div>
            </div>
        </div>
    )
}