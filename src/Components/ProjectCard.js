import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import projectData from '../ProjectData.json';
import { connect } from 'react-redux';

function makeArray(projectData) {
  let rowArray = [];
  projectData.sort((a, b) => b.id - a.id);

  rowArray = projectData.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
  return rowArray;
}

function ProjectCard (props) {
  let [dataState, setDataState] = useState(makeArray(projectData));

  return (
    <Container id="project" className="pt-3">
      {
        dataState.map((rData, rIdx) => {
          return (
          <Row key={ rIdx }>
            {
              rData.map((data, i) => {
                return (
                  <Col className="d-flex justify-content-center mb-5" key={ data.id }>
                    <Card style={{ width: '18rem' }} onClick={() => { props.dispatch({type: "show", payload: { id: data.id }}) }}>
                      <Card.Img style={{ height: '10rem' }} variant="top" src={ data.thumbnail } />
                      <Card.Body>
                        <Card.Title>{ data.title }</Card.Title>
                        <Card.Text>
                          {/* { data.summary } */}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
          )
        })
      }
    </Container>
  )
}

function stateToProps(state) {
  return {
    showModal: state.reducerModal
  }
}

export default connect(stateToProps)(ProjectCard);
// export default ProjectCard;