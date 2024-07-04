import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Component1 from './components/Component1';
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/shopping Cart/Cart";
import Home from "./components/shopping Cart/Home";
import Error from "./components/errorpage/Error";
function App() {
  return (
  <div>
     <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path='counter' element={< Component1/>}  />
        <Route path='/' element={< Home/>}  />
        <Route  path="cart"  element={< Cart/>}  />
        <Route  path="error"  element={< Error />}  />
        {/* <Route path='/data/:id' element={<Home />} /> */}
       </Routes>
       </BrowserRouter>
  </div>
  );
}

export default App;