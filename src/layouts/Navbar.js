import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <Navbar variant="dark" className="bg-dark px-3 mb-3">
      <Navbar.Brand>
        <Link to="/" className="text-white text-decoration-none">Logo</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar" className="justify-content-end">
        <Link to="/login" className="mx-3 text-white text-decoration-none">Login</Link>
        <Link to="/register" className="mx-3 text-white text-decoration-none">Register</Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MainNav