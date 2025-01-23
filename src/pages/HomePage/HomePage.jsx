import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import "./HomePage.scss";
import { useState, useEffect } from "react";
import img1 from "/pasta1.png"
import img2 from "/pasta2.png"
import Cart from "../../components/Cart/Cart";

import Payment from "../../components/Payment/Payment";
import Menu from "../../components/DishesMenu/dishes";


function HomePage() {
  const [openCart, setCartOpen] = useState(false);
  const [openPayment, setPaymentOpen] = useState(false);

  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("cartProducts")) || []
  );

  useEffect(() => {
    const hasQuantityProperty = cartProducts.every(product => product.quantity !== undefined);

    if (!hasQuantityProperty) {
      const updatedCartProducts = cartProducts.map((product) => ({
        ...product,
        quantity: product.quantity || 1,
      }));
      setCartProducts(updatedCartProducts);
    }
  }, [cartProducts]);
 
  const responsiveWidth = parseInt(window.innerWidth);

  return (
    <div>
      <div className={openCart && responsiveWidth < 500 ?  "responsive-cart-sidebar" : ""}>
      <Sidebar />  
      </div>
      <div className={openCart && responsiveWidth < 500 ?  "responsive-cart-root" : "mainRoot"}>
        <Header openCart={openCart} setCartOpen={setCartOpen} />
        <div className={`${openCart ? "cart-payment-container" : "cart-payment-close"} ${openPayment ? "payment-open" : "payment-close"}`}>
          <Cart openPayement={openPayment} setPaymentOpen={setPaymentOpen} cartProducts={cartProducts} openCart={openCart} setCartOpen={setCartOpen} setCartProducts={setCartProducts} />
          <Payment openPayement={openPayment} setPaymentOpen={setPaymentOpen} />
        </div>
        <Menu cartProducts={cartProducts} setCartProducts={setCartProducts} />
      </div>
    </div>
  );
}

export default HomePage;
