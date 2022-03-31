import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardBody,
  CardText,
  List,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import DishDetailsComponents from "./DishDetailsComponents";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { Routes } from "react-router-dom";

const Menu = ({ datadish }) => {
  const [selectedDish, setSelectedDish] = useState({});

  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };
  // const renderDish = (dish) => {
  //   if (dish != null)
  //     return (

  //     );
  //   else <div></div>;
  // };

  console.log(datadish, "come from menu");
  console.log(typeof selectedDish, "selectedDish hii");
  console.log("selectedDish", selectedDish);
  console.log(Object.keys(selectedDish).length);

  const menu = datadish.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card tag="li" onClick={() => onDishSelect(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
            {/* <p>{dish.description}</p> */}
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
      {/* {selectedDish.length == null ? (
        <DishDetailsComponents singledata={selectedDish} />
      ) : null}
       */}
      {Object.keys(selectedDish).length > 0 && (
        <DishDetailsComponents singledata={selectedDish} />
      )}
    </div>
  );
};

export default Menu;
