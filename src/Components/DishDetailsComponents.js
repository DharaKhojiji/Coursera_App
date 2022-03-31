import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  List,
  ListGroup,
  ListGroupItem,
  CardImg,
} from "reactstrap";
const DishDetailsComponents = ({ singledata }) => {
  console.log(singledata, "singledata");
  return (
    <div className="container">
      {singledata?.map((datas) => (
        <div className="row" key={datas.id}>
          <div className="col-6">
            <Card>
              <CardImg src={datas.image} alt={datas.name} />
              <CardBody>
                <CardTitle>Name - {datas.name}</CardTitle>
                <CardText>Category - {datas.category}</CardText>
                <CardText>Price - {datas.price}</CardText>
                <CardText>Description -{datas.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-6">
            <Card>
              <h4>comments</h4>
              {datas.comments?.map((com) => (
                <List key={com.id}>
                  <ListGroup>
                    <ListGroupItem>{com.comment}</ListGroupItem>
                    <ListGroupItem>
                      --{com.author} ,{" "}
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      }).format(new Date(Date.parse(com.date)))}
                    </ListGroupItem>
                  </ListGroup>
                </List>
              ))}
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DishDetailsComponents;
