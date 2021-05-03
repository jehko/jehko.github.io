import { Navbar, Nav } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link'

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#">Jehko's Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="#profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="#project">Project</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;