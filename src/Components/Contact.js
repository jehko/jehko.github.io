import React, { useState } from "react";
import { Jumbotron, Container, Row, Col, Form, Card, InputGroup, Toast } from "react-bootstrap";
import emailjs from "emailjs-com";

function Contact() {
  const SERVICE_ID = 'emailjs_jehko_gmail';
  const TEMPLATE_ID = 'template_5zx2e8s';
  const USER_ID = 'user_9L2TMeWCvoO0GCXpRtXVM';

  const RESULT_MSG = ['메일 전송을 완료했습니다.', '메일 전송을 실패했습니다.'];
  const TOAST_TIME = 2000;

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMsg, setInputMsg] = useState('');

  const [resultMsg, setResultMsg] = useState();
  const [showToast, setShowToast] = useState(false);

  const resetInput = () => {
    setInputName('');
    setInputEmail('');
    setInputMsg('');
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result);
        setResultMsg(RESULT_MSG[0]);
        resetInput();
      })
      .catch((error) => {
        console.log(error);
        setResultMsg(RESULT_MSG[1]);
      })
      .finally(() => {
        setShowToast(true);
      });
  }

  return (
    <Jumbotron id="contact" className="Contact">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-12 col-md-8 col-lg-6 pb-5">
            <Form onSubmit={sendEmail}>
              <Card className="rounded-10">
                <Card.Header className="p-0">
                  <div className="bg-dark text-white text-center py-2">
                    <h3><i className="fa fa-envelope"></i> Contact Me</h3>
                    <p className="m-0"></p>
                  </div>
                </Card.Header>
                <Card.Body className="p-3">
                  <Form.Group>
                    <InputGroup className="mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fa fa-user text-info"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="이름"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <InputGroup className="mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fa fa-envelope text-info"></i>
                        </div>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="보내시는 분"
                        value={inputEmail}
                        onChange={(e) => setInputEmail(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group>
                    <InputGroup className="mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fa fa-comment text-info"></i>
                        </div>
                      </div>
                      <textarea
                        className="form-control"
                        rows="4"
                        name="message"
                        placeholder="메시지"
                        value={inputMsg}
                        onChange={(e) => setInputMsg(e.target.value)}
                        required
                      ></textarea>
                    </InputGroup>
                  </Form.Group>

                  <div className="text-center">
                    <input
                      type="submit"
                      value="SEND"
                      className="btn btn-dark rounded-8 py-2 w-10"
                    />
                  </div>
                  {showToast &&
                    <div style={{position:'absolute',top:0, bottom:0, left:0, right:0, display:'flex', justifyContent:'center', alignItems:'center'}}>
                      <Toast onClose={() => {setShowToast(false)}} show={showToast} delay={TOAST_TIME} autohide>
                        <Toast.Header><strong className="mr-auto">{ resultMsg }</strong></Toast.Header>
                      </Toast>
                    </div>
                  }
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
