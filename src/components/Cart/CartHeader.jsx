import { useState } from "react";

function CartHeader({setPaymentOpen,openCart , setCartOpen}) {

  const [selectedButton, setSelectedButton] = useState("cartButton1");

  const handleCartButtonClick = (button) => {
    setSelectedButton(button);
  };

  const closeCart = () => {
    setCartOpen(false);
    setPaymentOpen(false);
  };

  return (
    <div className="cart-header-container">
      <div className="cart-header-title-closer-container">
        <h2 className="cart-header-title">Orders</h2>
        <svg version="1.1"  className="cart-closer" onClick={() => closeCart()} width="35px" height="35px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" xmlSpace="preserve">
          <circle fill="none" stroke="#393C49" strokeWidth="2" strokeMiterlimit="10" cx="16" cy="16" r="12" />
          <line fill="none" stroke="#393C49" strokeWidth="2" strokeMiterlimit="10" x1="11.5" y1="11.5" x2="20.5" y2="20.5" />
          <line fill="none" stroke="#393C49" strokeWidth="2" strokeMiterlimit="10" x1="20.5" y1="11.5" x2="11.5" y2="20.5" />
        </svg>
      </div>
      <div className="cart-header-buttons-container">
        <button className={selectedButton === "cartButton1" ? "cart-header-selected-button" : "cart-header-button"} onClick={() => handleCartButtonClick("cartButton1")}> Dine In </button>
        <button className={selectedButton === "cartButton2" ? "cart-header-selected-button" : "cart-header-button"} onClick={() => handleCartButtonClick("cartButton2")}> To Go </button>
        <button className={selectedButton === "cartButton3" ? "cart-header-selected-button" : "cart-header-button"} onClick={() => handleCartButtonClick("cartButton3")}> Delivery </button>
      </div>
      <div className="cart-header-titles-container">
        <p className="cart-header-p"> Item </p>
        <div className="cart-left-titles-container">
          <p className="cart-header-p"> Qty </p>
          <p className="cart-header-p"> Price </p>
        </div>
      </div>
    </div>
  );
};

export default CartHeader;