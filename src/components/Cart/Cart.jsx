import "./cart.scss"
import CartContent from "./CartContent";
import CartHeader from "./CartHeader";
import { useState } from "react";

const Cart = ({openPayement,setPaymentOpen, openCart, setCartOpen, cartProducts, setCartProducts }) => {
  const [paymentPage, setPaymentPage] = useState(false);
  
  const openPayment = () => {
      setPaymentPage(true);
  }

  return (
    <>
      <div className="cart-all-container">
        <div className="cart-container">
          <CartHeader setPaymentOpen={setPaymentOpen} openCart={openCart} setCartOpen={setCartOpen}/>
          <CartContent openPayement={openPayement} setPaymentOpen={setPaymentOpen} cartProducts={cartProducts} setCartProducts={setCartProducts} />
        </div>
        <div className="cart-payment-container">
           
        </div>
      </div>

    </>

  );
};

export default Cart;