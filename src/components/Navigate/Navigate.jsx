import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Navigate() {
  return (
    <div className='position-fixed top-0 start-0 end-0'>
      <Navbar expand="lg" className="bg-custome p-4 fs-6 fw-bolder text-white">
      <Container>
        <Navbar.Brand  className='fs-2'><Link to={''}>START FRAMEWORK</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to={'about'}>ABOUT</Link> </Nav.Link>
            <Nav.Link ><Link to={'portfolio'}>PORTFOLIO</Link></Nav.Link>
            <Nav.Link ><Link to={'contact'}>CONTACT</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
