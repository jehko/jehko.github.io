import { Card, Container, Row, Col } from 'react-bootstrap';

function ProjectCard () {
  return (
    <Container id="project" className="pt-3">
      <Row className="mb-5">
        <Col className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/thumb/thumb.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/thumb/thumb.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/thumb/thumb.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/thumb/thumb.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/thumb/thumb.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/thumb/thumb.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ProjectCard;