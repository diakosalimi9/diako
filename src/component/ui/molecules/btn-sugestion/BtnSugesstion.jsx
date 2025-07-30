import { useState } from "react"
import Button from "../../atom/button/Button"
import "./btnssugesstion.css"

export default function BtnSugesstion({slidesSugesstion, setActivslid, activslid}) {
    return (
        <div className="btns">
            {slidesSugesstion.map((item, index) => (
                <div className="box-btnsugess" key={index}>
                    <Button classname={activslid === index ? "btns-suges actives" : "btns-suges"} onClick={() => setActivslid(index)} key={index}>{item.text}</Button>
                </div>
            ))}
        </div>
    )
} 