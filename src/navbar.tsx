import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo  from "./images/CISC-Logo.png";
import catHeader from "./images/cat-header-box.png"
import './navbar.css'
import { Link } from 'react-router-dom'; // Import BrowserRouter and other necessary components

export function CollapsibleNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" id = "vertical" className="bg-body-tertiary" style={{color: '#0f14b7'}}>
      <Container id="container">
        <div className="cat-header-img">
          <img
              src={catHeader} 
              alt="cat-header"
              id="cat-header"
          />
          <Navbar.Brand as={Link} to="/homepage">Cat-ylist Career</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/BasicQuestion">Basic Question</Nav.Link>
            <Nav.Link as={Link} to="/DetailedQuestion">Detail Question</Nav.Link>
            <Nav.Link as={Link} to="/AboutMe">About Me</Nav.Link>
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>   
        <Nav.Item className='navbar-item'>
              <img
                src={logo} 
                alt="logo"
                id="logo-pic"
              />
      </Nav.Item>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;