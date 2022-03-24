import { DISHES } from "./Shared/Dishes";
import Menu from "./Menu";
import DishDetailsComponents from "./DishDetailsComponents";
import { useState } from "react";

function MainComponents() {
  console.log(DISHES, "DATA FROM DISHES ARRAY");
  const [selectedDish, setSelectedDish] = useState({});
  const onDishSelect = (dishId) => {
      alert()
    setSelectedDish(dishId);
    console.log("dishId", dishId);
    console.log(selectedDish, "setSelecteddish");
  };

  return (
    <div className="container">
      <Menu datadish={DISHES} onClick={() => alert()}></Menu>
      {/* {Object.keys(selectedDish).length > 0 && (
        <DishDetailsComponents
          dish={DISHES.filter((dish) => dish.id === selectedDish)}
        />
      )} */}
    </div>
  );
}

export default MainComponents;
