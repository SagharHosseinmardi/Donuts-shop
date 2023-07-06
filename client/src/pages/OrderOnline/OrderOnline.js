import "../OrderOnline/OrderOnline.css";
import donuts from "../../Utilities/donutInfo";

function OrderOnline() {
    return (
			<div>
				<h1>Online Ordering</h1>
                <p className="pickup">Pickup, ASAP (in 15 minutes) <a href="/link">Change</a></p>
                <h2>Menu</h2>
                <h2>Our Donuts</h2>
                <section>
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

export default OrderOnline;