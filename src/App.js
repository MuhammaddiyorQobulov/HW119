import Header from "./components/header/header";
import Empire from "./components/empire/empire";
import Products from "./components/products/products";
import Product from "./components/products/product";
import GlassesGirl from "./components/glassesGirls/glassesGirl";
import "../src/app.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Empire />
      <Products title="New Arrival" />
      <Products title="Best Selling Items" />
      <GlassesGirl />
      <Products title="Our Featured Products" />
      <Product />
    </div>
  );
}

export default App;
