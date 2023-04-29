import React, { createContext, useState, useContext } from 'react'
import { useCard } from './CardContext'
const CartContext = createContext();

export function CartProvider({ children }) {
  const [foodInCart, setFoodInCart] = useState([]);
  const [total, setTotal] = useState([0]);
  const [subTotal, setSubTotal] = useState([0]);
  const { card } = useCard();
  let sumFoodReduce;

  function AddItemCart(idItem) {
    const tempCard = [...card];
    const selectedFood = tempCard.find((food) => food.id === idItem);

    if (selectedFood.length <= 0) {
      if (selectedFood) {
        selectedFood.inCart = true;
        selectedFood.count = 1;
        selectedFood.total = selectedFood.price;
      }

      setFoodInCart([...foodInCart, selectedFood]);
      const selectedCard = tempCard.filter((value) => value.inCart == true ? value.total : '');
      const selectedCardTotalValue = selectedCard.map(food => food.total);
      sumFoodReduce = selectedCardTotalValue.reduce((sum, count) => sum + count, 0);
      setTotal(sumFoodReduce);
      setSubTotal(sumFoodReduce)
    } else {
      if (selectedFood) {
        selectedFood.inCart = true;
        selectedFood.count = 1;
        selectedFood.total = selectedFood.price;
      }

      setFoodInCart([...foodInCart, selectedFood])
      const selectCard = foodInCart.filter((value) => value.inCart == true ? value.total : '');
      const selectedCardTotalValue = selectCard.map(food => food.total);
      sumFoodReduce = selectedCardTotalValue.reduce((sum, count) => sum + count, 0)
      sumFoodReduce += selectedFood.total
      setTotal(sumFoodReduce)
      setSubTotal(sumFoodReduce)
    }
  }

  function IncrementItem(id) {
    const tempFood = [...foodInCart];
    const selectedFood = tempFood.find((food) => food.id === id);
    const index = tempFood.indexOf(selectedFood);
    const food = tempFood[index];

    food.count = food.count + 1;
    food.total = food.price * food.count;

    setFoodInCart(tempFood);
    const valueTotal = tempFood.map((value) => value.total);
    sumFoodReduce = valueTotal.reduce((sum, count) => sum + count, 0);
    setTotal(sumFoodReduce);
    setSubTotal(sumFoodReduce);
  }

  function DecrementItem(id) {
    const tempFood = [...foodInCart];
    const quantityItemZero = 0;
    const selectedFood = tempFood.find((food) => food.id === id);
    const index = tempFood.indexOf(selectedFood);
    const food = tempFood[index];

    food.count = food.count - 1;
    food.total = food.price * food.count;

    setFoodInCart(tempFood);
    const valueTotal = tempFood.map((value) => value.total);
    sumFoodReduce = valueTotal.reduce((sum, count) => sum + count, 0);

    if (food.count <= quantityItemZero) {
      removeItem(id)
      food.count = 1;
      food.total = selectedFood.price;
    }

    setTotal(sumFoodReduce)
    setSubTotal(sumFoodReduce);
  }

  function removeItem(id) {
    const tempFood = [...foodInCart];
    const selectedFood = tempFood.find((food) => food.id === id);

    const index = tempFood.indexOf(selectedFood);
    let food = tempFood[index];

    food.inCart = false;

    let foodRemove = tempFood.filter((food) => food.inCart);
    const valueTotal = foodRemove.map((value) => value.total);
    sumFoodReduce = valueTotal.reduce((sum, count) => sum + count, 0);
    setFoodInCart(foodRemove);
    setTotal(sumFoodReduce)
    setSubTotal(sumFoodReduce)

  }


  return (
    <CartContext.Provider
      value={{
        foodInCart,
        setFoodInCart,
        total,
        setTotal,
        subTotal,
        setSubTotal,
        AddItemCart,
        IncrementItem,
        DecrementItem,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext);
  const { foodInCart, setFoodInCart, total, setTotal, subTotal, setSubTotal, AddItemCart, IncrementItem, DecrementItem, removeItem } = context;

  return { foodInCart, setFoodInCart, total, setTotal, subTotal, setSubTotal, AddItemCart, IncrementItem, DecrementItem, removeItem };
}
