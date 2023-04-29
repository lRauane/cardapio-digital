import React, { createContext, useState, useContext, useEffect } from "react";
import { getFoods } from "../services/api";

const CardContext = createContext();

export function CardProvider({ children }) {
  const [card, setcard] = useState([]);

  useEffect(() => {
    async function fetchFoods() {
      const foods = await getFoods();
      setcard(foods);
    }

    fetchFoods()
  }, []);

  return (
    <CardContext.Provider value={{ card, setcard }}>
      {children}
    </CardContext.Provider>
  )
}

export function useCard() {
  const context = useContext(CardContext);
  const { card, setcard } = context;
  return { card, setcard };
}