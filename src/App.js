import { Route, Routes } from "react-router-dom";
import HomePage from "./component/home/HomePage";
import Shop from "./component/shop/Shop";
import ProductDetail from "./component/productDetail/ProductDetail";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail" element={<ProductDetail />} />
      </Routes>


    </div>
  )
}

export default App
