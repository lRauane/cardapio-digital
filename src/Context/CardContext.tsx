import { createContext, useState, useEffect, ReactNode } from "react";
import { getFoods } from "../services/api";
import { ToastContainer } from "react-toastify";
import { Food } from "../components/Product/CardProduct";

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextValue {
  card: Food[];
  setcard: React.Dispatch<React.SetStateAction<Food[]>>;
}

export const CardContext = createContext({} as CartContextValue);

export function CardProvider({ children} : CartContextProviderProps) {
  const [card, setcard] = useState<Food[]>([]);

  useEffect(() => {
    async function fetchFoods() {
      const foods = await getFoods();
      setcard(foods);
    }

    fetchFoods()
  }, []);

  return (
    <CardContext.Provider value={{ card, setcard }}>
      <ToastContainer />
      {children}
    </CardContext.Provider>
  )
}
