import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/productDetail/ProductDetail";
import Footer from "./components/footer/Footer";
import { createContext, lazy, useState} from "react";
import { Suspense } from "react";
// import ProductListPage from "./pages/ProductListPage";
const LazyProductListPage = lazy(()=>import('./pages/ProductListPage'))
export const CartContext = createContext();
function App() {
     const [cartItem, setCartItem] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <CartContext.Provider value={{cartItem:cartItem,setCartItem:setCartItem}}>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/products" element={<Suspense fallback="...Loading"><LazyProductListPage /></Suspense>} />
        </Routes>
      </CartContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
