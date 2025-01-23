import ProductCard from "../ProductCard/ProductCard";
import SettingsHeader from "../SettingsHeader/SettingsHeader";
import { foods } from "../../db/foods";
import "../ProductManagment/ProductManagment.scss";
import CategoryTabs from "../CategoryTabs/CategoryTabs";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import ChangeButtons from "../ChangeButtons/ChangeButtons";
import EditDishModal from "../EditDishModal/EditDishModal";
import AddDish from "../AddDish/AddDish";

Modal.setAppElement("#root");

const customStyles = {
  overlay: { backgroundColor: "#000000B2" },
  content: {
    position: "fixed",
    top: "15%",
    left: "25%",
    right: "25%",
    bottom: "15%",
    backgroundColor: "#1F1D2B",
    border: "1px solid #1F1D2B",
  },
};

function ProductsManagement({ isAddDishOpen, setAddDishOpen }) {
  const [editModalIsOpen, setEditIsOpen] = useState(false);

  function editModalHandler() {
    setEditIsOpen(!editModalIsOpen);
  }

  const [dishes, setDishes] = useState(foods);
  const [filteredDishes, setFilteredDishes] = useState(dishes);
  const [filterParameters, setFilterParameters] = useState({
    orderType: "All",
    category: "all",
    searchQuery: "",
  });
  const [editableDish, setEditableDish] = useState([]);

  useEffect(() => {
    setFilteredDishes(filteredDishes);
  }, [filteredDishes]);

  function takeDish(id) {
    setEditableDish(filteredDishes.find((dish) => dish.id === id));
  }

  function handleDishEdit(editedDish) {
    setDishes((prevDishes) =>
      prevDishes.map((dish) => (dish.id === editedDish.id ? editedDish : dish))
    );
    editModalHandler();
  }

  const addDishOpener = () => {
    setAddDishOpen(true);
  }

  return (
    <>
      <div className={isAddDishOpen ? "add-dish-container" : "add-dish-close"}>
        <AddDish setDishes={setDishes} dishes={dishes}  setAddDishOpen={setAddDishOpen} />
      </div>
      <div className="management-container">
        <div className="header-sticky">
          <SettingsHeader />
          <CategoryTabs
            dishes={dishes}
            setFilteredDishes={setFilteredDishes}
            filterParameters={filterParameters}
            setFilterParameters={setFilterParameters}
          />
        </div>
        <div className="product-cards-container">
          <div onClick={() => addDishOpener()} className="add-dish-card">
            <span>+</span>
            <p>Add new dish</p>
          </div>
          {filteredDishes.map((food) => {
            return (
              <ProductCard
                key={food.id}
                id={food.id}
                image={food.image}
                name={food.name}
                price={food.price}
                editHandler={editModalHandler}
                takeDish={takeDish}
              />
            );
          })}
        </div>
        <div className="footer-sticky">
          <ChangeButtons />
        </div>
      </div>
      <Modal isOpen={editModalIsOpen} style={customStyles}>
        <EditDishModal
          editHandler={editModalHandler}
          editableDish={editableDish}
          onEdit={handleDishEdit}
        />
      </Modal>
    </>
  );
}
export default ProductsManagement;