import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const MainNav = ({ user }) => {

  const dispatch = useDispatch();

  const logoutUser = () => {
    console.log('User logged out');
    dispatch({ type: 'LOGOUT_USER'});
  }
  
  return (
    <nav className="navbar navbar-dark bg-dark p-3 mb-3 navbar-expand-sm d-flex align-items-center">
      <Link to="/" className="navbar-brand text-white text-decoration-none">Logo</Link>
      <button 
          type='button'
          className="ms-3 btn btn-outline-danger"
          onClick={logoutUser}>
        logout
      </button>
      <button type='button' className="navbar-toggler" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className='navbar-toggler-icon'></span>
      </button>
      
      <div id="main-navbar" className="collapse navbar-collapse justify-content-end">
        {/* {!user ? <ul className='navbar-nav mr-auto'>
          <li className='mx-2 px-3 nav-item bg-success p-2 rounded'>
            <Link to="/login" className="text-light text-decoration-none">login</Link>
          </li>
          <li className='mx-2 nav-item p-2 border border-success rounded'>
            <Link to="/register" className="text-light text-decoration-none">register</Link>
          </li>
        </ul> : <button 
          type='button'
          className="btn btn-outline-danger"
          onClick={logoutUser}>logout</button> } */}
      </div>
    </nav>
  )
}

export default MainNav