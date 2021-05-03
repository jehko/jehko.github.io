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
                안녕하세요. 개발자 고정훈입니다.<br/>
                학부때 프로젝트를 진행하며 개발에 대한 매력을 느꼈습니다.<br/>
                2013년 첫 회사에 입사하여 실무를 시작했고, 끊임없이 '재미있는 것'을
                찾고있습니다.<br/>
                최근에는 React, JPA에 관심이 생겨 공부하고 있습니다.                
              </blockquote>
            </div>
            <div className="profile-item">
              <h2>SKILLS</h2>
              <blockquote>
                <span className="word-token">JAVA</span>
                <span className="word-token">SPRING</span>
                <span className="word-token">Javascript</span>
                <span className="word-token">React</span>
                <span className="word-token">Oracle</span>
                <span className="word-token">Postgresql</span>
              </blockquote>
            </div>
            <div className="profile-item">
              <h2>TOOLS</h2>
              <blockquote>
                <span className="word-token">Eclipse</span>
                <span className="word-token">VS Code</span>
                <span className="word-token">Toad</span>
                <span className="word-token">pgAdmin</span>
                <span className="word-token">SLACK</span>
                <span className="word-token">GIT</span>
                <span className="word-token">SVN</span>
              </blockquote>
            </div>
          </Col>
          <Col className="profile-center">
            <div className="profile-item">
              <h2>CONTACT</h2>
              <blockquote>
                <p>Tel. 010-2944-1219</p>
                <p>Email jehko08@naver.com</p>
                <p>서울시 구로구 구일로</p>
              </blockquote>
            </div>
            <div className="profile-item">
              <h2>EDUCATION</h2>
              <blockquote>
                <p>2008 서울대진고등학교 졸업</p>
                <p>2012 한성대학교 졸업</p>
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
              <h2>CAREER</h2>
              <blockquote>
                <p>2018 - 현재 기가지니 웹앱 서비스 개발</p>
                <p>2017-2018 빅데이터 솔루션 개발</p>
                <p>2017-2018 SNS 웹크롤러 개발</p>
                <p>2013-2016 한국도로공사 내부 시스템 다수 개발</p>
              </blockquote>
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Profile;