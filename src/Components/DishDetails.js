// import { Modal } from "bootstrap";
import React, { useState } from "react";
import { CardText, Modal, ModalBody, ModalHeader } from "reactstrap";

const DishDetails = (props) => {
  const { id, name, description, image } = props.dishdatas.datas;
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);
  console.log(props, "line no 5");
  return (
    <div key={id} className="col-12-mt-5">
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody>
          <img src={image}></img>
          <p>{description}</p>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DishDetails;
