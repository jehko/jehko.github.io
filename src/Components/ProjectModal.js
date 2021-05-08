import { Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


function ProjectModal(props) {
  return (
    <Modal
      size="lg"
      show={ props.showModal }
      onHide={() => props.dispatch({type: "hide"})}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Large Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>...</Modal.Body>
    </Modal>
  )
}

function stateToProps(state) {
  return {
    showModal: state.reducerModal
  }
}

export default connect(stateToProps)(ProjectModal);
// export default ProjectModal;