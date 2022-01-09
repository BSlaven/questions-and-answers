import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const QaForm = ({ question, user }) => {

  const [ text, setText ] = useState('');

  const dispatch = useDispatch();
  
  useEffect(() => {
    setText(question);
  }, [question])

  const inputHandler = e => {
    const value = e.target.value;
    setText(value);
  }

  const submitQuestionHandler = e => {
    e.preventDefault();
    const newQuestion = {
      text: text,
      answers: [],
      likes: [],
      dislikes: [],
      author: user,
      createdAt: new Date()
    }
    console.log('created user in the qa form', newQuestion);
    dispatch({ type: 'ADD_QUESTION', payload: newQuestion })
    setText('');
  }
  
  return (
    <form
      style={{backgroundColor: '#D5F5E3', maxWidth: '600px'}}
      onSubmit={submitQuestionHandler}
      className="col-12 d-flex rounded flex-column p-2 mb-4">
      <textarea
        className="col-12 border-white p-1 mb-3"
        value={text || ''}
        onChange={inputHandler}
        type="text" />
      <button style={{maxWidth: '200px'}} className="ms-auto col-sm-12 col-lg-6 btn btn-primary">ADD</button>
    </form>
  )
}

export default QaForm
