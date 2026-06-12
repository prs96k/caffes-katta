import { React, useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Cart from "./pages/Cart/cart";
import Footer from "./components/Footer/Footer";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Loginpopup from "./components/LoginPopUp/loginpopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";

const App = () => {
  const [Showlogin, setShowlogin] = useState(false);

  return (
    <>
      {Showlogin ? <Loginpopup setShowlogin={setShowlogin} /> : null}

      <div className="app">
        <Navbar setShowlogin={setShowlogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />

          {/* 🔥 ADMIN ROUTE */}
          <Route
            path="/admin"
            element={
              <iframe
                src="/admin/index.html"
                style={{
                  width: "100%",
                  height: "100vh",
                  border: "none",
                }}
                title="Admin Panel"
              />
            }
          />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
