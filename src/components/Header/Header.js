import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <h1>StudentApp</h1>
      </Link>
      <div className="navbar-container">
        <Navbar bg="" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="/" className='navbar-link' >HOME</Nav.Link>      */}
                <Nav.Link href="/home" className="navbar-link">
                  Home
                </Nav.Link>
                <Nav.Link href="/add-student-details" className="navbar-link">
                  Add Student Details
                </Nav.Link>
                <Nav.Link href="/student-details" className="navbar-link">
                  Student Details
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
