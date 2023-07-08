// import { useState } from "react";
import "../OrderOnline/OrderOnline.css";
import donuts from "../../Utilities/donutInfo";
import bag from "../../images/shopping-bag.png";

function OrderOnline() {
    // const [getMoreInfo, setGetMoreInfo] = useState(false);

    // const handleClick = () => {
    //     setGetMoreInfo(!getMoreInfo);
    // };

    return (
			<div>
				<h1>Online Ordering</h1>
				<p className="pickup">
					Pickup, ASAP (in 15 minutes) <a href="/link">Change</a>
				</p>
				<aside className="menu-line">
					<h2>Menu</h2>
					<h2>Our Donuts</h2>
                    <img src={bag} alt="shopping bag" className="shopping-bag" />
				</aside>

				<section className="donut-area">
					{donuts.map((item) => {
						return (
							<aside key={item.id} className="donuts">
								<h3 className="donutName">{item.name}</h3>
								<img src={item.imgSrc} alt={item.alt} className="donutPic" />
								<p className="donut-description">{item.description}</p>
								<p className="donut-price">{item.price}</p>
							</aside>
						);
					})}
				</section>
			</div>
		);
}


// function DonutInfo() {
//     return <div>
//         <h2>Chocolate</h2>
//     </div>;
// }

export default OrderOnline;