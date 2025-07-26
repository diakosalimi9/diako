import img1cctv from "../../../../assets/images/pngwing.png"
import img2cctv from "../../../../assets/images/pngwing 4.png"
import img3cctv from "../../../../assets/images/pngwing 5.png"
import Img from "../../atom/img/Img"
import "./cctvimages.css"
export default function CctvImages() {
    return(
        <div className="box-images-cctv">
            <Img SRC={img1cctv} classname={""}/>
            <Img SRC={img2cctv} classname={""}/>
            <Img SRC={img3cctv} classname={""}/>
        </div>
    )
} 