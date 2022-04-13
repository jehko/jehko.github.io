import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function Profile () {
  return (
    <Jumbotron id="profile" className="profile">
      <Container fluid className="postion-absolute">
        <Row>
          <Col className="profile-left">
            <div className="profile-item">
              <h2>PROFILE</h2>
              <blockquote>
                8년차 웹개발자 고정훈입니다.<br/>
                Java, Spring Boot, Oracle, PostgreSql, VueJs를 활용하여 프로젝트 구축과 운영을 경험했습니다.<br/>
                형상 관리는 주로 Git을 사용하고 있으며 슬랙을 활용한 협업을 경험했습니다.<br/>
                끊임없이 '새로운 것, 재미있는 것'을 찾고있으며<br/>
                최근에는 AWS에 React, JPA 토이 프로젝트를 구축하며 재미를 느끼고 있습니다.                
              </blockquote>
            </div>
            <div className="profile-item">
              <h2>SKILLS</h2>
              <blockquote>
                <span className="word-token">JAVA</span>
                <span className="word-token">SPRING</span>
                <span className="word-token">Javascript</span>
                <span className="word-token">VueJs</span>
                <span className="word-token">React</span>
                <span className="word-token">Postgresql</span>
              </blockquote>
            </div>
            <div className="profile-item">
              <h2>TOOLS</h2>
              <blockquote>
                <span className="word-token">IntelliJ</span>
                <span className="word-token">VS Code</span>
                <span className="word-token">DataGrip</span>
                <span className="word-token">SLACK</span>
                <span className="word-token">GIT</span>
                <span className="word-token">Jenkins</span>
              </blockquote>
            </div>
          </Col>
          <Col className="profile-center">
            <div className="profile-item">
              <h2>CONTACT</h2>
              <blockquote>
                <p>Email jehko08@naver.com</p>
                <p>Addr. 서울시 구로구 구일로</p>
              </blockquote>
            </div>
            <div className="profile-item">
              <h2>EDUCATION</h2>
              <blockquote>
                <p>2008 서울대진고등학교 졸업</p>
                <p>2012 한성대학교 컴퓨터공학과 졸업</p>
              </blockquote>
            </div>
            <div className="profile-item">
              <h2>PRIZE</h2>
              <blockquote>
                <p>2012 제6회 공개SW 개발자대회 동상</p>
              </blockquote>
            </div>
          </Col>
          <Col className="profile-right">
            <div className="profile-item">
              <h2>CERTIFICATE</h2>
              <blockquote>
                <p>정보처리기사(2012)</p>
                <p>SQLD(2021)</p>
              </blockquote>
            </div>
            <div className="profile-item">
              <h2>CAREER <span className="h5">(8년)</span></h2>
              <blockquote>
                <p><span>2020.12 - 현재</span><span className="p-5">ktds</span></p>
                <p><span>2018.06 - 2020.12</span><span className="p-4">리네아정보기술(프리랜서)</span></p>
                <p><span>2017.04 - 2018.04</span><span className="p-4">타파크로스</span></p>
                <p><span>2013.07 - 2016.10</span><span className="p-4">휴먼아이티에스</span></p>
              </blockquote>
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Profile;
