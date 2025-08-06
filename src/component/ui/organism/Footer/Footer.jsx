import P from "../../atom/p/P"
import Accesscontentfoot from "../../molecules/Accesscontentfoot/AccessContentFoot"
import ContentFooter from "../../molecules/contentfooter/ContentFooter"
import "./footer.css"
const accessData = [
    {text:"امکان پرداخت در محل",icon:"wallet"},
    {text:"پشتیبانی ۲۴ ساعته",icon:"phone33"},
    {text:"ضمانت اصلالت کالا",icon:"scaner"},
    {text:"ارسال سریع",icon:"rocket"},
]
export default function Footer(){
    return(
        <div className="mainbox-footer">
            <div className="Accessbox">
                <Accesscontentfoot accessData={accessData}/>
            </div>
            <div className="footer-container">
                <ContentFooter />
            </div>
            <P>کلیه حقوق مادی و معنوی دوره ها متعلق به این وبسایت می باشد.</P>
        </div>
    )
}