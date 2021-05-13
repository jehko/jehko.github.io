import React from "react";
import { Modal, Button, Row, Col, Image } from "react-bootstrap";
import { connect } from "react-redux";

function ProjectModal(props) {
  return (
    <Modal
      size="lg"
      show={props.modalState.showModal}
      onHide={() => props.dispatch({ type: "hide" })}
      aria-labelledby="example-modal-sizes-title-lg" centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{ props.modalState.title }</Modal.Title>
      </Modal.Header>
      <Row>
        <Col className="col-sm-4 d-flex">
          <Image src={ props.modalState.thumbnail } className="w-100 h-auto m-3 align-self-center"></Image>
        </Col>
        <Col className="col-sm-8">
          <Modal.Body>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div>기간</div>
                <div>{props.modalState.starttime + ' - ' + props.modalState.endtime}</div></li>
              <li class="list-group-item">
                <div>개발환경</div>
                <div>{ props.modalState.environment }</div>
              </li>
              <li class="list-group-item">
                <div>담당업무</div>
                <div>{ props.modalState.role }</div>
              </li>
              <li class="list-group-item">
                <div>{ props.modalState.summary }</div>
              </li>
              {
                props.modalState.link ? (
                  <li class="list-group-item">
                    <div>관련 링크</div>
                    <div><a href={props.modalState.link} target="_blank" rel="noreferrer">{ props.modalState.link }</a></div>
                  </li>
                ) : (
                  null
                )
              }
            </ul>
          </Modal.Body>
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
