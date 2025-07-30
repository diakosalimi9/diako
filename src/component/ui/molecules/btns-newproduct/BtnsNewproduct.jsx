import Button from "../../atom/button/Button"
import Icon from "../../atom/icon/Icon"
import Span from "../../atom/span/Span"
import "./btnsnewproduct.css"
const h = [
    { category: "هدفون", icon: "headphone" },
    { category: "دیتا پروژکتور", icon: "dp-new" },
    { category: "کامپیوتر", icon: "computer" },
    { category: "لپ تاپ", icon: "laptop" },
    { category: " دوربین", icon: "camer" },
]
export default function BtnsNewproduct({ active , setActive}) {
    console.log(active);
    
    return (
        <div className="btns-newproduct">
            {h.map((item, index) => (
                <Button classname={active===index ? "buttoncate ative" :"buttoncate" } onClick={()=>setActive(index)}>
                    <Icon name={item.icon} />
                    <Span>{item.category}</Span>
                </Button>
            ))}
        </div>
    )
}