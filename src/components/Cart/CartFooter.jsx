import { useState, useEffect } from "react";

const CartFooter = ({openPayment,setPaymentOpen, cartContentProducts}) => {
    const [subtotal, setSubtotal] = useState(0);
  
    useEffect(() => {
        let updatedSubtotal = 0;
        cartContentProducts.map((product) => (
            updatedSubtotal += product.price * product.quantity
        ));
        setSubtotal(updatedSubtotal);
    }, [cartContentProducts])

    const paymentOpener = () => {
        setPaymentOpen(true);
    }

    return (
        <div className="cart-footer-container">
            <div className="cart-footer-info-container">
                <div className="cart-footer-money-container">
                    <p className="cart-footer-p"> Discount </p>
                    <p className="cart-footer-money-p"> $0 </p>
                </div>
                <div className="cart-footer-money-container">
                    <p className="cart-footer-p"> Subtotal </p>
                    <p className="cart-footer-money-p"> ${subtotal} </p>
                </div>
                <button onClick={ () => paymentOpener()} className="cart-footer-button"> Continue To Payment </button>
            </div>
        </div>
    )
}

export default CartFooter;