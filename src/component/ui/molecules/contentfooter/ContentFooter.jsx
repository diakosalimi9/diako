import Img from "../../atom/img/Img"
import P from "../../atom/p/P"
import Ul from "../../atom/ul/UL"
import Li from "../../atom/Li/Li"
import Input from "../../atom/input/InputSearch"
import Button from "../../atom/button/Button"
import "./contentfooter.css"
import Icon from "../../atom/icon/Icon"
const listlinksfooter = [
    ["دسترسی سریع", "صفحه اصلی", "حساب کاربری", "تماس با ما"],
    ["لینک های داغ", "فرصت های شغلی", "قوانین و مقررات", "درباره ما"],
]
export default function ContentFooter() {
    return (
        <div className="content-footer">
            <Img Src={"src/assets/images/logoo.png"} />

            {listlinksfooter.map((item, index) => (
                <div className="list-link-footer" key={index}>
                    <P>{item[0]}</P>
                    <Ul classname="list">
                        {item.map((item) => (
                            <Li>{item}</Li>
                        ))}

                    </Ul>
                </div>
            ))}
            <div className="box-news">
                <P>از تخفیفات با خبر شو</P>
                <div className="mobile-signin">
                    <Input placeholder="موبایل خود را وارد کنید" />
                    <Button>عضو شوید</Button>

                </div>
                <div className="communications">
                    <Icon name="tweeter"/>
                    <Icon name={"whatsup"}/>
                    <Icon name={"inestgram"}/>
                    <Icon name={"telegrame"}/>
                    <Icon name={"aparat"}/>
                </div>
            </div>
        </div>
    )
}