import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const MainNav = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const loggedInUser = useSelector(state => state.loggedIn)

  const logoutUser = () => {
    dispatch({ type: 'LOGOUT_USER' });
    navigate('/');
  }
  
  return (
    <nav className="navbar navbar-dark bg-dark p-3 mb-3 navbar-expand-sm d-flex align-items-center">
      <Link to="/" className="navbar-brand text-white text-decoration-none">Logo</Link>
      <button type='button' className="navbar-toggler" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className='navbar-toggler-icon'></span>
      </button>
      
      <div id="main-navbar" className="collapse navbar-collapse justify-content-end">
        {!loggedInUser ? <ul className='navbar-nav mr-auto'>
          <li className='mx-2 px-3 nav-item bg-success p-2 rounded'>
            <Link to="/login" className="text-light text-decoration-none">login</Link>
          </li>
          <li className='mx-2 nav-item p-2 border border-success rounded'>
            <Link to="/register" className="text-light text-decoration-none">register</Link>
          </li>
        </ul> : 
        <ul className='navbar-nav mr-auto'>
          <li className='mx-2 me-4 px-3 nav-item p-2 rounded'>
            <Link to="/profile" className="text-light text-decoration-none">
              profile
            </Link>
          </li>
          <button 
            type='button'
            className="btn btn-outline-danger"
            onClick={logoutUser}>logout</button>
        </ul> }
      </div>
    </nav>
  )
}

export default MainNav