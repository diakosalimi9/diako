import ContainerNewProduct from "../../molecules/containernewproduct/ContainerNewProduct"
import BtnsNewproduct from "../../molecules/btns-newproduct/BtnsNewproduct"
import { useState } from "react"
import "./newproduct.css"
import DateNewProduct from "../../molecules/data-newproduct/DateNewProduct"

export default function NewProduct() {
    const [ activep, setActivep] = useState(0)
    return (
        <div className="mainbox-newproduct">
            <div className="content-p">
                <div className="R">
                    <ContainerNewProduct />
                </div>
                <div className="L">
                    <div className="t">
                        <BtnsNewproduct active={activep} setActive={setActivep}/>
                    </div>
                    <div className="bo">
                        <DateNewProduct active={activep}/>
                    </div>
                </div>
            </div>
        </div>

    )
}