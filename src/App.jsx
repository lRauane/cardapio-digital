import { useEffect, useState } from "react";
import CartItem from "./components/Cart/CartItemCard";
import FoodItem from "./components/Cart/FoodItemCard";
import api from "./services/api";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function fetchApi(){
      const response = await api.get("/foods")
      setFoods(response.data)
    }
    fetchApi()
  }, []);

  const addToCart = item => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = item => {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h1>Minha Loja</h1>
      <div>
        {foods.map(food => (
          <FoodItem key={food.id} food={food} onAddToCart={addToCart} />
        ))}
      </div>
      <div>
        <h2>Carrinho de compras</h2>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} onRemoveFromCart={removeFromCart} />
        ))}
        <p>Total: {cartItems.reduce((total, cartItem) => total + cartItem.price, 0)}</p>
      </div>
    </div>
  );
}

export default App;