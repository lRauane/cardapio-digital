import { Banner } from "./components/Banner/Banner";
import { CardProduct } from "./components/Product/CardProduct";
import { Categories } from "./components/Categories/Categories";
import { NavBar } from "./components/Header/NavBar";
import { CardProvider } from "./Context/CardContext";
import { CartProvider } from "./Context/CartContext";
import React, { useState } from "react";
import { CategoryTypes } from "./types/categoryTypes";


function App() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryTypes | null>(null);

  const handleCategoryClick = (category: CategoryTypes | null) => {
    setSelectedCategory(category);
  };

  return (
    <React.Fragment>
      <CardProvider>
        <CartProvider>
          <NavBar />
          <Banner />
          <Categories handleCategoryButtonClick={handleCategoryClick} />
          <CardProduct
            selectedCategory={selectedCategory ? selectedCategory.id : null}
          />
        </CartProvider>
      </CardProvider>
    </React.Fragment>
  );
}

export default App;
