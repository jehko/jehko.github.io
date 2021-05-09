import { Modal, Button, Row, Col, Image } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function ProjectModal(props) {
  return (
    <Modal
      size="lg"
      show={props.modalState.showModal}
      onHide={() => props.dispatch({ type: "hide" })}
      aria-labelledby="example-modal-sizes-title-lg" centered
    >
      <Row>
        <Col className="col-sm-4">
          <Image src={ props.modalState.thumbnail } className="w-100 h-75"></Image>
        </Col>
        <Col className="col-sm-8">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Large Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>...<br/><br/><br/><br/><br/></Modal.Body>
        </Col>
      </Row>
      
      <Modal.Footer>
        <Button onClick={() => props.dispatch({ type: "hide" })}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function stateToProps(state) {
  return {
    modalState: state.reducerModal,
  };
}

export default connect(stateToProps)(ProjectModal);
// export default ProjectModal;
