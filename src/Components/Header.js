import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">GST Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">
              <Link to="/" className='text-decoration-none'>Home</Link>
              </Nav.Link>
              <NavDropdown title="Bills" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  <Link to="/sales" className='text-decoration-none'>Sales Bill</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                <Link to="/purchase" className='text-decoration-none'>Purchase Bill</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" disabled>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">
              <Link to="/contact" className='text-decoration-none'>Contact</Link>
              </Nav.Link>
              <Nav.Link href="#" >
              <Link to="/about" className='text-decoration-none'>About</Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button variant="outline-success" as={Link} to='/login' >Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}
export default Header