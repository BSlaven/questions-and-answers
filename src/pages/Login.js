import { useState } from 'react'
import { useDispatch } from 'react-redux';

const Login = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const dispatch = useDispatch();

  const inputHandler = e => {
    const value = e.target.value;
    const targetElement = e.target.name;
    switch (targetElement) {
      case 'email':
        setEmail(value);
        break;
      default:
        setPassword(value);
    }
  }

  const submitHandler = e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_USER', email, password })
  }
  
  return (
    <div className="container row mx-auto col-12 my-5 d-flex justify-content-around">
      <form id="login-form" className="col-sm-10" onSubmit={submitHandler}>
        <div className="mb-3 text-start">
          <label htmlFor="email" className="fw-bold px-0 form-control-lg col-form-label">Email</label>
          <input
            onChange={inputHandler}
            value={email}
            name="email"
            type="email"
            id="email"
            placeholder="Enter your email..."
            className="form-control" />
        </div>
        <div className="mb-3 text-start">
          <label htmlFor="password" className="fw-bold px-0 form-control-lg col-form-label">Password</label>
          <input
            onChange={inputHandler}
            value={password}
            name="password"
            type="password"
            id="password"
            placeholder="Enter your password..."
            className="form-control" />
        </div>
        <div className="col-6 text-start">
          <button type="submit" className="my-3 col-6 btn btn-success">Log in</button>
        </div>
      </form>
    </div>
  )
}

export default Login
