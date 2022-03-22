import React, { useState } from "react";
import { Button, Media } from "reactstrap";
import DishDetails from "./DishDetails";

function MenuDetails(props) {
  const [showDish, setShowDish] = useState(false);

  const { id, name, image, description } = props.datas;
  console.log(props);

  const buttonHandler = () => {
    setShowDish(true);
  };
  return (
    <div key={id} className="col-12-mt-5">
      <Media tag="li">
        <Media left middle>
          <Media object src={image} alt={name} />
        </Media>
        <Media body className="ml-5">
          <Media heading>{name}</Media>
          <p>{description}</p>
        </Media>
      </Media>
      <Button onClick={buttonHandler}>Check Dishes</Button>
      {showDish && <DishDetails dishdatas={props} key={id} />}
    </div>
  );
}

export default MenuDetails;
