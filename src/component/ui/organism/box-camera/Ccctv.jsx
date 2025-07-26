
import CctvImages from "../../molecules/boxcctvimages/CctvImages"
import TextCctv from "../../molecules/textcctv/TextCctv"
import "./cctv.css"
export default function Ccctv() {
    return (
        <div className="box-cctv-t center">
            <div className="content-cctv">
                <div className="box-left">
                    <CctvImages />
                </div>
                <div className="box-right center">
                    <div className="container-right">
                        <TextCctv />
                    </div>
                </div>
            </div>
        </div>
    )
}