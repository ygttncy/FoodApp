import { useState, useEffect } from "react";
import CartFooter from "./CartFooter";

const CartContent = ({ openPayement, setPaymentOpen, cartProducts, setCartProducts }) => {
    const [cartContentProducts, setCartContentProducts] = useState(cartProducts);

    useEffect(() => {
        setCartContentProducts(cartProducts);
    }, [cartProducts]);

    const quantityHandler = (product, event) => {
        const newQuantity = parseInt(event.target.value) || 1;

        setCartContentProducts((prevProducts) =>
            prevProducts.map((prevProduct) =>
                prevProduct.id === product.id ? { ...prevProduct, quantity: newQuantity } : prevProduct
            )
        );
    };

    function removeFromCart(product) {
        const updatedCart = cartContentProducts.filter((cartProduct) => cartProduct !== product);
        setCartContentProducts(updatedCart);
        setCartProducts(updatedCart);
        localStorage.setItem("cartProducts", JSON.stringify([...cartContentProducts]));
    }

    return (
        <>
            <div className="cart-products-container">
                {
                    cartContentProducts.map((product) => (
                        <div key={product.id} className="cart-product-features-container">
                            <div className="cart-product-mapped-data-container">
                                <div className="cart-product-img-p-container">
                                    <img className="cart-product-img" src={product.image} alt="" />
                                    <div className="cart-product-title-price-container">
                                        <p className="cart-p cart-name-p">{product.name}</p>
                                        <p className="cart-p cart-price-p">${product.price}</p>
                                    </div>
                                </div>
                                <div className="cart-product-qty-total-container">
                                    <div className="cart-responsive-p-container">
                                        <p className="cart-responsive-p"> Quantity : </p>
                                        <input className="cart-product-qty" type="text" onChange={(event) => quantityHandler(product, event)} placeholder={product.quantity} />
                                    </div>
                                    <div className="cart-responsive-p-container">
                                        <p className="cart-responsive-p"> Subtotal : </p>
                                        <p className="cart-p">${(product.quantity * product.price)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-product-note-container">
                                <input className="cart-product-note" type="text" placeholder="Order Note..." />
                                <div onClick={() => removeFromCart(product)} className="cart-products-delete-svg-container">
                                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.5001 6H3.5" stroke="#EA7C69" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5" stroke="#EA7C69" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="#EA7C69" stroke-width="1.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <CartFooter openPayement={openPayement} setPaymentOpen={setPaymentOpen} cartContentProducts={cartContentProducts} />
        </>

    )
}

export default CartContent;