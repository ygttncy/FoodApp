import { categories } from "@/db/foods";
import { useEffect, useState } from "react";
import "./CategoryTabs.scss";

import PropTypes from 'prop-types';

function CategoryTabs({
  setFilteredDishes,
  dishes,
  filterParameters,
  setFilterParameters,
}) {
  CategoryTabs.propTypes = {
    setFilteredDishes: PropTypes.func.isRequired,
    dishes: PropTypes.array.isRequired,
    filterParameters: PropTypes.object.isRequired,
    setFilterParameters: PropTypes.func.isRequired,
  };
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  function filterDishesByCategory(categoryKey) {
    const newFilterParameters = {
      ...filterParameters,
      category: categoryKey,
    };
    setFilterParameters(newFilterParameters);
  }

  useEffect(() => {
    let filteredDishes = [];
    if (filterParameters.category === "all") {
      filteredDishes = dishes;
    } else {
      filteredDishes = dishes.filter((dish) => {
        const isOrderTypeMatch =
          filterParameters.orderType === "All" ||
          dish.orderType === filterParameters.orderType;
        const isCategoryMatch = dish.category.key === filterParameters.category;
        const isSearchQueryMatch = dish.description
          .toLowerCase()
          .includes(filterParameters.searchQuery.toLowerCase());
        return isOrderTypeMatch && isCategoryMatch && isSearchQueryMatch;
      });
    }
    setFilteredDishes(filteredDishes);
  }, [filterParameters, dishes, setFilteredDishes]);

  function handleActiveCategory(category) {
    setActiveCategory(category);
  }

  return (
    <ul className="category-tabs">
      {categories.map((category) => (
        <li
          onClick={() => {
            filterDishesByCategory(category.key);
            handleActiveCategory(category);
          }}
          className={activeCategory === category ? "active" : ""}
          key={category.id}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}

export default CategoryTabs;
