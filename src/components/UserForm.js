import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const UserForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [ isValid, setIsValid ] = useState(true);
  const [ error, setError ] = useState('')

  const inputHandler = e => {
    const value = e.target.value.trim();
    const targetElement = e.target.name;
    switch (targetElement) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        setPassword(value);
    }
  }

  const validate = () => {
    if(password.length < 6) {
      setError('Password must have at least 6 characters!')
      setIsValid(false)
    } else {
      setError('');
      setIsValid(true)
    }
    return isValid
  }

  const formSubmitHandler = e => {
    e.preventDefault();
    const valid = validate();
    if(!valid) return;
    dispatch({ type: 'REGISTER_USER', email, password, name });
    navigate('/');
  }
  
  return (
    <form className="col-sm-12 col-md-6" onSubmit={formSubmitHandler}>
      <div className="mb-3 text-start">
        <label htmlFor="name" className="px-0 form-control-lg col-form-label">Name</label>
        <input 
          onChange={inputHandler}
          value={name || ''}
          name="name"
          type="text" 
          id="name" 
          placeholder="Enter your name..." 
          className="form-control" />
      </div>
      <div className="mb-3 text-start">
        <label htmlFor="email" className="px-0 form-control-lg col-form-label">Email</label>
        <input 
          onChange={inputHandler}
          value={email || ''}
          name="email"
          type="email" 
          id="email" 
          placeholder="Enter your email..." 
          className="form-control" />
      </div>
      <div className="mb-3 text-start">
        <label htmlFor="password" className="px-0 form-control-lg col-form-label">Password</label>
        <input
          value={password || ''}
          onChange={inputHandler}
          name="password"
          type="password" 
          id="password" 
          placeholder="Enter your password..." 
          className="form-control" />
      </div>
      {!isValid && <p style={{fontSize: '0.8rem'}} className="fw-bold text-start text-danger">{error}</p>}
      <div className="col-6 text-start">
        <button type="submit" className="my-3 col-6 btn btn-primary">Submit</button>
      </div>
    </form>
  )
}

export default UserForm
