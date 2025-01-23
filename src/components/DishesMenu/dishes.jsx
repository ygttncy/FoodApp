import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./dishes.scss";
import { foods } from "../../db/foods";
import CategoryTabs from "../../components/CategoryTabs/CategoryTabs"; // Ensure the path is correct

const Menu = ({ cartProducts, setCartProducts }) => {
  const [serviceType, setServiceType] = useState("dine in");
  
  const [filteredDishes, setFilteredDishes] = useState(foods);
  const [filterParameters, setFilterParameters] = useState({
    category: "all",
    serviceType: "All",
    searchQuery: "",
  });

  const addToCart = (product) => {
    const isInCart = cartProducts.some((cartProduct) => {
      return parseInt(product.id) === parseInt(cartProduct.id);
    });

    if (isInCart) {
      const sameProduct = cartProducts.find((cartProduct) => {
        return parseInt(product.id) === parseInt(cartProduct.id);
      });

      sameProduct.quantity = sameProduct.quantity + 1;
      setCartProducts((prevProducts) =>
        prevProducts.map((prevProduct) =>
          prevProduct.id === product.id
            ? { ...prevProduct, quantity: sameProduct.quantity }
            : prevProduct
        )
      );
    } else {
      setCartProducts((prev) => [...prev, product]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    let filtered = foods;

    if (filterParameters.category !== "all") {
      filtered = filtered.filter(
        (food) => food.category.key === filterParameters.category
      );
    }

    if (filterParameters.serviceType !== "All") {
      filtered = filtered.filter(
        (food) => food.serviceType === filterParameters.serviceType
      );
    }

    setFilteredDishes(filtered);
  }, [filterParameters, foods]);

  const handleServiceTypeChange = (type) => {
    setFilterParameters((prev) => ({
      ...prev,
      serviceType: type,
    }));
    setServiceType(type);
  };

  return (
    <div className="menu">
      <div className="category">
				<CategoryTabs
        filterParameters={filterParameters}
        setFilterParameters={setFilterParameters}
        setFilteredDishes={setFilteredDishes}
        dishes={foods}
      />
			</div>
      <div className="title">
        <h2>Choose Dishes</h2>
        <select
          className="service-type"
          onChange={(e) => handleServiceTypeChange(e.target.value)}
        >
          <option value="dine in">Dine In</option>
          <option value="togo">To Go</option>
          <option value="delivery">Delivery</option>
        </select>
      </div>
      <div className="dishes-container">
        {filteredDishes.map((food, rowIndex) => (
          <div key={rowIndex} className="dish">
            <img src={food.image} alt={food.name} />
						<br/>
            <div className="dishes-text-container">
              <h3>{food.name}</h3>
              <p>{food.description}</p>
              <div className="price-box">
                <span>${food.price}</span>
              </div>
            </div>
            <div onClick={() => addToCart(food)} className="add-to-cart">
              Add to Cart
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Menu.propTypes = {
  cartProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCartProducts: PropTypes.func.isRequired,
};

export default Menu;