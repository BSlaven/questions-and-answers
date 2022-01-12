import { AiOutlineHome } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

const MainNav = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const loggedInUser = useSelector(state => state.loggedIn)

  const logoutUser = () => {
    dispatch({ type: 'LOGOUT_USER' });
    navigate('/');
  }
  
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark p-3 mb-3 navbar-expand-sm d-flex align-items-center">
      <Container>
        <Link to="/" className="navbar-brand text-white text-decoration-none">
          <AiOutlineHome className='fs-4 mb-1 text-white' />
        </Link>
        <Navbar.Toggle aria-controls="my-navbar" />
        <Navbar.Collapse id="my-navbar">
          <Nav className="ms-auto">
            <Link to="/" className="m-3 my-auto text-light text-decoration-none">
              home
            </Link>
            {!loggedInUser ? <ul className='navbar-nav mr-auto'>
            <li className='m-3 nav-item'>
              <Link to="/login" className="text-light text-decoration-none">login</Link>
            </li>
            <li className='m-3 nav-item'>
              <Link to="/register" className="text-light text-decoration-none">register</Link>
            </li>
          </ul> : 
            <ul className='navbar-nav mr-auto'>
              <li className='m-3 my-auto nav-item'>
                <Link to="/profile" className="text-light text-decoration-none">
                  profile
                </Link>
              </li>
              <button 
                type='button'
                className="btn btn-outline-danger m-3 nav-item"
                onClick={logoutUser}>logout</button>
            </ul> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNav