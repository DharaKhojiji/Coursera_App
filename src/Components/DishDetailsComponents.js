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
const DishDetailsComponents = ({ singledata }) => {
  console.log(singledata, "singledata");
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Card>
            <CardImg src={singledata.image} alt={singledata.name} />
            <CardBody>
              <CardTitle>Name - {singledata.name}</CardTitle>
              <CardText>Category - {singledata.category}</CardText>
              <CardText>Price - {singledata.price}</CardText>
              <CardText>Description -{singledata.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-6">
          <Card>
            <h4>comments</h4>
            {singledata?.comments?.map((com) => (
              <List key={com.id}>
                <ListGroup>
                  <ListGroupItem>{com.comment}</ListGroupItem>
                  <ListGroupItem>
                    --{com.author} , {com.date}
                  </ListGroupItem>
                </ListGroup>
              </List>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DishDetailsComponents;
