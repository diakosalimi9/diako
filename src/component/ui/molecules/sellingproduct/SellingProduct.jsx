import "./SellingProduct.css"
import Icon from "../../atom/icon/Icon"
import Span from "../../atom/span/Span"
import P from "../../atom/p/P"
import Button from "../../atom/button/Button"
const dataBestSelling = [
	{ img: "src/assets/images/band.png", titleFa: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت", titleEn: "Apple Ipad Mini 2021 (wifi)", price: "۵۴/۲۰۰ تومان" },
	{ img: "src/assets/images/band.png", titleFa: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت", titleEn: "Apple Ipad Mini 2021 (wifi)", price: "۵۴/۲۰۰ تومان" },
	{ img: "src/assets/images/band.png", titleFa: "آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت", titleEn: "Apple Ipad Mini 2021 (wifi)", price: "۵۴/۲۰۰ تومان" },
]
const categorybestsellimg = ["اپل", "سامسونگ", "شیائومی", "هواوی", "گوگل"]

export default function SellingProduct() {
	return (
		<div className="container-bestselling">
			<div className="title-bestselling">
				<Span>پرفروشترین ساعت های هوشمند</Span>

				<div className="felx-gap">
					<Span >مشاهده همه</Span>

					<Icon name={"Arrow---Left"} />
				</div>
			</div>
			<div className="box-content-sellingproduct">
				{dataBestSelling.map((item) => (
					<>
						<div className="box-silde-dp">
							<div className="box-img">
								<img src={item.img} />
							</div>
							<div className="title-slide">
								<P>{item.titleFa}</P>
								<P>{item.titleEn}</P>

								<Span>{item.price}</Span>
							</div>
							<div className="btn-addcart">
								<Button >افزودن به سبد خرید</Button>
							</div>
						</div>
					</>
				))}
				<div className="categories-bestselling">
					<div className="conten-category">
						<P>ساعت هوشمند</P>
						{categorybestsellimg.map((item) => (
							<Span>{item}</Span>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}