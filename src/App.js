import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from "./Components/Home/HomeComponents/MainPage";
import Navbar from "./Components/Global/GlobalComponents/Navbar";
import Footer from "./Components/Global/GlobalComponents/Footer";
import LoginWizard from "./Components/Auth/AuthComponents/LoginWizard";
import Shop from "./Components/Shop/ShopComponents/Shop";
import Cart from "./Components/Shop/ShopComponents/Cart";


import { useEffect } from "react";
import FreeShipping from "./Components/Shop/ShopComponents/FreeShipping";

const App = () => {

  const activeNav = 'activeNav';

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path={"/cart"} element={[<Navbar key={1008} activeNav={activeNav} />, <FreeShipping />, <Cart key={1009} />, <Footer key={1020} />]} />
          <Route exact path={"/shop"} element={[<Navbar key={1001} activeNav={activeNav} />, <Shop key={1007} />, <Footer key={1002} />]} />
          <Route exact path={"/login"} element={[<LoginWizard key={1003} />]} />
          <Route exact path={"/"} element={[<Navbar key={1004} />, <MainPage key={1005} />, <Footer key={1006} />]} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
