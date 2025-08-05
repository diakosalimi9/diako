import BanerDiscount from "../../molecules/baner-discount/BanerDiscount"
import ProductsTopDiscount from "../../molecules/produts-topdiscount/ProductsTopDiscount"
import "./Topdiscount.css"

export default function TopDiscount(){
    return(
        <div className="mainbox-topdiscount">
            <div className="box-content-topdiscount">
                <ProductsTopDiscount />
                <BanerDiscount />
            </div>
        </div>
    )
}