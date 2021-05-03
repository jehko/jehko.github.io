import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function Profile () {
  return (
    <Jumbotron id="profile" className="profile">
      <Container fluid className="postion-absolute">
        <Row className="">
          <Col className="profile-left">
            <div className="profile-item">
              <h2>PROFILE</h2>
              <p>안녕하세요. 개발자 고정훈입니다.</p>
              <p>안녕하세요. 개발자 고정훈입니다.</p>
              <p>안녕하세요. 개발자 고정훈입니다.</p>
              <p>안녕하세요. 개발자 고정훈입니다.</p>
              <p>안녕하세요. 개발자 고정훈입니다.</p>
              <p>안녕하세요. 개발자 고정훈입니다.</p>
              <p>안녕하세요. 개발자 고정훈입니다.</p>
              <p>안녕하세요. 개발자 고정훈입니다.</p>
            </div>

          </Col>
          <Col className="profile-center">
            <div className="profile-item">
              <h2>CONTACT</h2>
              <p>Tel. 010-2944-1219</p>
              <p>Email jehko08@naver.com</p>
              <p>서울시 구로구 구일로</p>
            </div>
            <div className="profile-item">
              <h2>EDUCATION</h2>
              <p>2008 서울대진고등학교 졸업</p>
              <p>2012 한성대학교 졸업</p>
            </div>
            <div className="profile-item">
              <h2>AWARDS</h2>
              <p>2012 제6회 공개SW 개발자대회 동상</p>
            </div>
          </Col>
          <Col className="profile-right">
            <div className="profile-item">
              <h2>CERTIFICATE</h2>
              <p>정보처리기사(2012)</p>
              <p>SQLD(2021)</p>
            </div>
            <div className="profile-item">
              <h2>PROJECT</h2>
              <p>2018 - 현재 기가지니 웹앱 서비스 개발</p>
              <p>2017-2018 빅데이터 솔루션 개발</p>
              <p>2017-2018 SNS 웹크롤러 개발</p>
              <p>2013-2016 한국도로공사 내부 시스템 다수 개발</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Profile;