import Icon from "../../atom/icon/Icon"
import P from "../../atom/p/P"
import "./Accesscontentfoot.css"
export default function Accesscontentfoot({ accessData }) {
    console.log(accessData)

    return (
        <div className="content-asccess-footer">
            {accessData.map((item, index) => (
                <div className="content-access">
                    <Icon name={item.icon} />
                    <P>{item.text}</P>
                </div>
            ))}
        </div>
    )
}