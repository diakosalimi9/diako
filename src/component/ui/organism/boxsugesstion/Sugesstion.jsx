import { useState } from "react";
import BtnSugesstion from "../../molecules/btn-sugestion/BtnSugesstion"
import "./sugesstion.css"
import P from "../../atom/p/P";
import SugesstionContent from "../../molecules/contentSugesstion/SugesstionContent";
const slidesSugesstion = [
    { text: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت" },
    { text: "ساعت هوشمند سامسونگ مدل Galaxt Watch 5" },
    { text: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت" },
    { text: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت" },
];
export default function Sugesstion() {
    const [activslid, setActivslid] = useState(1)

    return (
        <div className="sugesstionbox">
            <div className="content-sugesstion">
                <div className="sugesstion-L">
                    <div className="container-sugesstion-bl">
                        <BtnSugesstion slidesSugesstion={slidesSugesstion} setActivslid={setActivslid} activslid={activslid} />
                    </div>
                </div>
                <div className="sugesstion-R">
                    <div className="bb">
                        <P>پیشنهاد ویژه امروز!</P>
                    </div>
                    <div className="content-box-R-sugesstion">
                        {/* {slidesSugesstion[activslid].datas}/ */}
                        <SugesstionContent activeslideb={activslid} />
                    </div>
                </div>
            </div>
        </div>
    )
}