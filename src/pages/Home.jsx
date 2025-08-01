import Bestsellingproducts from "../component/ui/organism/Bestsellingproducts/BestSellinProducts";
import Ccctv from "../component/ui/organism/box-camera/Ccctv";
import NewProduct from "../component/ui/organism/boxnewproduct/NewProduct";
import Sugesstion from "../component/ui/organism/boxsugesstion/Sugesstion";
import Laptops from "../component/ui/organism/laptops/laptops";
import PromoCart from "../component/ui/organism/promocart/PromoCart";
import SliderDP from "../component/ui/organism/sliderdp/SliderDP";
import SliderTechno from "../component/ui/organism/slidertechno/SliderTechno";

export default function Home() {
    return (
        <>
            <SliderTechno />
            <Ccctv />
            <SliderDP />
            <Sugesstion/>
            <NewProduct />
            <Laptops/>
            <PromoCart />
            <Bestsellingproducts />
        </>
    )
}