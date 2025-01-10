import focaccia from '../../assets/pizzas/focaccia.jpg'
import margherita from '../../assets/pizzas/margherita.jpg'
import spinaci from '../../assets/pizzas/spinaci.jpg'
import funghi from '../../assets/pizzas/funghi.jpg'
import salamino from '../../assets/pizzas/salamino.jpg'
import prosciutto from '../../assets/pizzas/prosciutto.jpg'

// Define an array of pizza objects with properties for name, ingredients, price, photo name, and sold out status.
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: focaccia,
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: margherita,
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: spinaci,
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: funghi,
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: salamino,
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
        price: 18,
        photoName: prosciutto,
        soldOut: false,
    },
];
function PizzaCard() {
    return (
        <section className="container">
            <main className="menu">
                <h2>Our menu</h2>
                <p>
                    Authentic Italian cuisine. 6 creative dishes to choose from. All
                    from our stone oven, all organic, all delicious.
                </p>
                <ul className="pizzas">
                    {pizzaData.map((data) => {
                        return (
                            <li key={data.name} className={`pizza ${data.soldOut ? "sold-out" : ""}`}>
                                <img src={data.photoName} alt={data.name} />
                                <div>
                                    <h3>{data.name}</h3>
                                    <p>{data.ingredients}</p>
                                    <p>Price: ${data.price}</p>
                                    {data.soldOut ? <span>Sold Out</span> : <span>In Stock</span>}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </section>
    )
}

export default PizzaCard;