import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishDetailsComponents from "./DishDetailsComponents";
const onClickHandkler = (item) => {
  console.log("iddish", item);
};
const Menu = ({ datadish }) => {
  console.log(datadish, "datadish");
  const menu = datadish.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card key={dish.id} tag="li" onClick={() => onClickHandkler(dish)}>
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
      {Object.keys(datadish).length > 0 && (
        <DishDetailsComponents singledata={datadish} />
      )}
    </div>
  );
};

export default Menu;
