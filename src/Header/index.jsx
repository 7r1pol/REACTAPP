import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"

function Header() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">News</Link>
          <Nav className="me-auto">
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/events/Summer2023" className="nav-link">Barack Obama Events</Link>
            <Link to="/events/Elon Musk" className="nav-link">Elon Musk</Link>
            <Link to="/Barak Obama" className="nav-link">Barak Obama</Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;