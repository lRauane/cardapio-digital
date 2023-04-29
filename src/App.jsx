import Banner from './components/Banner/Banner'
import CardProduct from './components/Product/CardProduct'
import Categories from './components/Categories/Categories'
import NavBar from './components/Header/NavBar'
import { CardProvider } from './Context/CardContext';
import { CartProvider } from './Context/CartContext';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <CardProvider>
        <CartProvider>
          <NavBar />
          <Banner />
          <Categories />
          <CardProduct />
        </CartProvider>
      </CardProvider>
    </React.Fragment>
  );
}

export default App;