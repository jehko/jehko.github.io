import React from "react";
import { Jumbotron, Container, Row, Col, Form, Card, InputGroup } from "react-bootstrap";

function Contact() {
  return (
    <Jumbotron id="contact" className="Contact">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-12 col-md-8 col-lg-6 pb-5">
            <Form method="post">
              <Card className="rounded-10">
                <Card.Header className="p-0">
                  <div class="bg-dark text-white text-center py-2">
                    <h3>
                      <i class="fa fa-envelope"></i> Contact Me
                    </h3>
                    <p class="m-0"></p>
                  </div>
                </Card.Header>
                <Card.Body className="p-3">
                  <Form.Group>
                    <InputGroup className="mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fa fa-user text-info"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="nombre"
                        name="nombre"
                        placeholder="이름"
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <InputGroup className="mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fa fa-envelope text-info"></i>
                        </div>
                      </div>
                      <input
                        type="email"
                        class="form-control"
                        id="nombre"
                        name="email"
                        placeholder="보내시는 분"
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group>
                    <InputGroup className="mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fa fa-comment text-info"></i>
                        </div>
                      </div>
                      <textarea
                        class="form-control"
                        placeholder="메시지"
                        required
                      ></textarea>
                    </InputGroup>
                  </Form.Group>

                  <div class="text-center">
                    <input
                      type="submit"
                      value="SEND"
                      class="btn btn-dark rounded-8 py-2 w-10"
                    />
                  </div>
                </Card.Body>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Contact;
