import "./ProductCard.scss";
import PropTypes from "prop-types";

function ProductCard({ id, image, name, price, editHandler, takeDish }) {
  return (
    <>
      <div className="product-card">
        <div className="img-box">
          <img className="food-image" src={image} />
        </div>
        <div className="details">
          <p>{name}</p>
          <span>${price}</span>
        </div>
        <button
          className="edit-box"
          onClick={() => {
            takeDish(id);
            editHandler();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M14.9512 14.0075C15.2543 14.0075 15.5 14.2484 15.5 14.5455C15.5 14.8178 15.2935 15.0429 15.0257 15.0785L14.9512 15.0834H9.22583C8.92274 15.0834 8.67705 14.8426 8.67705 14.5455C8.67705 14.2731 8.8835 14.0481 9.15136 14.0124L9.22583 14.0075H14.9512ZM9.38269 1.6806C10.4217 0.662132 12.1069 0.662132 13.1459 1.6806L14.2245 2.73791C15.2635 3.75638 15.2635 5.40829 14.2245 6.42675L6.11717 14.3739C5.65359 14.8283 5.02506 15.0833 4.36901 15.0833H1.04878C0.740346 15.0833 0.492487 14.8342 0.500174 14.532L0.583693 11.248C0.600298 10.6273 0.859392 10.0355 1.30722 9.59653L9.38269 1.6806ZM8.755 3.81592L2.08332 10.3573C1.83438 10.6013 1.69012 10.9308 1.68089 11.2755L1.61121 14.0071L4.36901 14.0075C4.69352 14.0075 5.00559 13.8955 5.2519 13.6932L5.34108 13.6131L12.0458 7.04092L8.755 3.81592ZM12.3698 2.44136C11.7594 1.84305 10.7691 1.84305 10.1588 2.44136L9.53167 3.05508L12.8217 6.28008L13.4484 5.66599C14.0249 5.10092 14.0569 4.20369 13.5445 3.60171L13.4484 3.49867L12.3698 2.44136Z"
              fill="#EA7C69"
            />
          </svg>
          <p>Edit Dish</p>
        </button>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
