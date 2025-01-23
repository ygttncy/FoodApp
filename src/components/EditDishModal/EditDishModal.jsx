import "./EditDishModal.scss";
import { useState } from "react";
import lineImg from "../../../public/line.svg";
import Button from "../Button/Button";

function EditDishModal({ editHandler, editableDish, onEdit }) {
  const [formData, setFormData] = useState({
    name: editableDish.name,
    price: editableDish.price,
    image: editableDish.image,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit({ ...editableDish, ...formData, price: Number(formData.price) });
  };

  return (
    <div>
      <div className="edit-dish-container">
        <div className="content-container">
          <div className="content-box">
            <label className="informations">
              Dish Image:
              <input
                type="text"
                className="information-inputs"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="line-img-box">
            <img className="line-img" src={lineImg} alt="" />
          </div>
          <div className="content-box">
            <label className="informations">
              Dish Name:
              <input
                type="text"
                className="information-inputs"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="line-img-box">
            <img className="line-img" src={lineImg} alt="" />
          </div>
          <div className="content-box">
            <label className="informations">
              Dish Price:
              <input
                type="text"
                className="information-inputs"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </div>
        <div className="btn-container">
          <Button
            id="cancel-btn"
            width="175px"
            height="50px"
            variant="secondary"
            onClick={editHandler}
          >
            Cancel
          </Button>
          <Button width="175px" height="50px" onClick={handleSubmit}>
            Edit Dish
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditDishModal;
