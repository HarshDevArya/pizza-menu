import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
// import pizzaData from "data"
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      {/* // const style = { color: "red", fontSize: "48ppx", textTransform: "uppercase" }; //we can Store style in a variable */}
      <h1>Fast React Pizza Co.</h1>
      {/* // return <h1 style={{color: 'red', fontSize:"48ppx", textTransform:"uppercase"}}>Fast React Pizza Co.</h1>; */}
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  //const pizzas = []; //pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        <>
          <p>
            Authenticate Italian Cuisine, 6 creative dishes to chose from. All
            from over stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are Still working on our Menu...</p>
      )}

      {/* <div>
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredient={pizza.ingredients}
            photoName={pizza.photoName}
            price={pizza.price}
            soldOut={pizza.soldOut}
          />
        ))}
      </div> */}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={12} //"12"
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12} //"12"
      />
      <Pizza
        name="Focaccia"
        ingredient="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={6} //"6"
      /> */}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  // if (pizzaObj.soldOut) {
  //   return null;
  // }
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img className="" src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}$</span>
        )}
        {/* <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price} </span> */}
      </div>
      {/* <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h3>Spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p> */}
    </li>
  );
}

// function Pizza({ photoName, name, ingredient, price }) {
//   return (
//     <div>
//       <img src={photoName} alt="Pizza Spinaci" />
//       <h3>{name}</h3>
//       <p>{ingredient}</p>
//       <p>{price}</p>
//       {/* <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
//       <h3>Spinaci</h3>
//       <p>Tomato, mozarella, spinach, and ricotta cheese</p> */}
//     </div>
//   );
// }

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHours = 10;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  console.log(isOpen);
  //   if (hour >= openHours && hour <= closeHours) {
  //     alert("We are Open");
  //   } else {
  //     alert("Sorry We are Close");
  //   }
  //   console.log(hour);
  return (
    <footer className="footer">
      {/* we use && also */}
      {isOpen ? (
        <Order closingTime={closeHours} />
      ) : (
        <p>
          😔 We are Close. Come visit us at {openHours}:00 or order online in
          Opening Hours.😔
        </p>
      )}
      {/* {new Date().toLocaleTimeString()} We're Currently Open */}
    </footer>
  );
}

function Order({ closingTime }) {
  return (
    <div className="order">
      <p>We are Open Until {closingTime}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
