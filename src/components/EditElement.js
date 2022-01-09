import { useState } from 'react';
import { useDispatch } from 'react-redux'

const EditElement = ({ element, user, close }) => {

  const dispatch = useDispatch();

  const [ elementText, setElementText ] = useState('');
  
  const inputChangeHandler = e => {
    const value = e.target.value;
    setElementText(value);
  }

  const submitChanges = e => {
    e.preventDefault();
    if(element === 'name') {
      const name = elementText;
      dispatch({ type: 'CHANGE_USER_NAME', name, id: user.id })
    }
  }
  
  return (
    <form className="position-relative border col-sm-12 col-md-5 m-4" onSubmit={submitChanges}>
      <span 
        style={{right: 0, top: '-0.5rem'}} 
        className="btn fs-3 position-absolute"
        onClick={close}>&times;</span>
        
      {element === 'name' && <div className="mb-3 text-start">
        <label htmlFor="name" className="px-0 form-control-lg col-form-label">Name</label>
        <input 
          name="name"
          onChange={inputChangeHandler}
          value={elementText || ''}
          type="text" 
          id="name" 
          placeholder="Enter your name..." 
          className="form-control" />
      </div>}

      {element === 'password' && <div className="mb-3 text-start">
        <label htmlFor="password" className="px-0 form-control-lg col-form-label">Password</label>
        <input
          onChange={inputChangeHandler}
          value={elementText ||''}          
          name="password"
          type="password" 
          id="password" 
          placeholder="Enter your password..." 
          className="form-control" />
      </div>}
      <div className="col-6 text-start">
        <button type="submit" className="my-3 col-sm-12 btn btn-primary">Sign in</button>
      </div>
    </form>
  )
}

export default EditElement
