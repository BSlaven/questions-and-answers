import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <Navbar variant="dark" className="bg-dark px-3 mb-3">
      <Navbar.Brand>
        Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar" className="justify-content-end">
        <Link to="/question" className="mx-3">Question</Link>
        <Link to="/login" className="mx-3">Login</Link>
        <Link to="/register" className="mx-3">Register</Link>
        <Link to="/profile" className="mx-3">Profile</Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MainNav