import { Route, Routes } from "react-router-dom";
import HomePage from "./component/home/HomePage";
import Shop from "./component/shop/Shop";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      
      
    </div>
  )
}

export default App
