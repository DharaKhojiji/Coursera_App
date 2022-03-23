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

const Menu = ({ datadish }) => {
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };
  const renderDish = (dish) => {
    if (dish != null)
      return (
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Card>
                <CardImg src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>Name - {dish.name}</CardTitle>
                  <CardText>Category - {dish.category}</CardText>
                  <CardText>Price - {dish.price}</CardText>
                  <CardText>Description -{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-6">
              <Card>
                {dish.comments.map((com) => (
                  // console.log(com.comment,"com")

                  <List key={com.id}>
                    <ListGroup>
                      <ListGroupItem>{com.comment}</ListGroupItem>
                    </ListGroup>
                  </List>
                ))}
              </Card>
            </div>
          </div>
        </div>
      );
    else <div></div>;
  };

  console.log(datadish, "come from menu");

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
    <div className="contaiber">
      <div className="row">{menu}</div>
      <div className="row">{renderDish(selectedDish)}</div>
    </div>
  );

  // return (
  //   <div className="container">
  //     <div className="row">
  //       {dishes.map((dish) => (
  //         <MenuDetails key={dish.id} datas={dish}></MenuDetails>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default Menu;
