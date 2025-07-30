import Ccctv from "../component/ui/organism/box-camera/Ccctv";
import NewProduct from "../component/ui/organism/boxnewproduct/NewProduct";
import Sugesstion from "../component/ui/organism/boxsugesstion/Sugesstion";
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
        </>
    )
}