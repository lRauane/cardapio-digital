import Banner from './components/Banner/Banner'
import CardProduct from './components/Product/CardProduct'
import Categories from './components/Categories/Categories'
import NavBar from './components/Header/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Categories />
      <CardProduct />
    </div>
  );
}

export default App;