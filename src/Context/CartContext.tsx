import { createContext, useState, ReactNode, useContext } from 'react'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CardContext } from './CardContext';

interface CartContextProviderProps {
  children: ReactNode;
}

interface Food {
  name: ReactNode;
  image_url: string | undefined;
  id: number;
  inCart: boolean;
  count: number;
  total: number;
  price: number;
}

interface CartContextProps {
  foodInCart: Food[];
  setFoodInCart: React.Dispatch<React.SetStateAction<Food[]>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  subTotal: number;
  setSubTotal: React.Dispatch<React.SetStateAction<number>>;
  AddItemCart: (id: number) => void;
  IncrementItem: (id: number) => void;
  DecrementItem: (id: number) => void;
  removeItem: (id: number) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartContextProviderProps) {
  const [foodInCart, setFoodInCart] = useState<Food[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(0);
  const { card } = useContext(CardContext);

  function AddItemCart(idItem: number) {
    const tempCard = [...card];
    const selectedFood = tempCard.find((food) => food.id === idItem);
  
    if (selectedFood) {
      selectedFood.inCart = true;
      selectedFood.count = 1;
      selectedFood.total = selectedFood.price;
  
      setFoodInCart([...foodInCart, selectedFood]);
  
      const selectedCard = tempCard.filter((value) => value.inCart);
      const selectedCardTotalValue = selectedCard.map((food) => food.total);
      const sumFoodReduce = selectedCardTotalValue.reduce((sum, count) => sum + count, 0);
  
      setTotal(sumFoodReduce);
      setSubTotal(sumFoodReduce);
      toast.success('Item adicionado ao carrinho com sucesso!');
    } else {
      console.error('Food item not found with id:', idItem);
    }
  }

  function IncrementItem(id: number) {
    const tempFood = [...foodInCart];
    const selectedFood = tempFood.find((food) => food.id === id);
  
    if (selectedFood) {
      const index = tempFood.indexOf(selectedFood);
      const food = tempFood[index];
  
      food.count = food.count + 1;
      food.total = food.price * food.count;
  
      setFoodInCart(tempFood);
      const valueTotal = tempFood.map((value) => value.total);
      const sumFoodReduce = valueTotal.reduce((sum, count) => sum + count, 0);
      setTotal(sumFoodReduce);
      setSubTotal(sumFoodReduce);
    } else {
      console.error('Food item not found with id:', id);
    }
  }
  

  function DecrementItem(id: number) {
    const tempFood = [...foodInCart];
    const quantityItemZero = 0;
    const selectedFood = tempFood.find((food) => food.id === id);
  
    if (selectedFood) {
      const index = tempFood.indexOf(selectedFood);
      const food = tempFood[index];
  
      food.count = food.count - 1;
      food.total = food.price * food.count;
  
      setFoodInCart(tempFood);
      const valueTotal = tempFood.map((value) => value.total);
      const sumFoodReduce = valueTotal.reduce((sum, count) => sum + count, 0);
  
      if (food.count <= quantityItemZero) {
        removeItem(id);
        food.count = 1;
        food.total = selectedFood.price;
      }
  
      setTotal(sumFoodReduce);
      setSubTotal(sumFoodReduce);
    } else {
      console.error('Food item not found with id:', id);
    }
  }
  

  function removeItem(id: number) {
    const tempFood = [...foodInCart];
    const selectedFood = tempFood.find((food) => food.id === id);
  
    if (selectedFood) {
      const index = tempFood.indexOf(selectedFood);
      tempFood.splice(index, 1);
  
      const foodRemove = tempFood.filter((food) => food.inCart);
      const valueTotal = foodRemove.map((value) => value.total);
      const sumFoodReduce = valueTotal.reduce((sum, count) => sum + count, 0);
  
      setFoodInCart(foodRemove);
      setTotal(sumFoodReduce);
      setSubTotal(sumFoodReduce);
  
      toast.error('Item removido do carrinho!');
    } else {
      console.error('Food item not found with id:', id);
    }
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