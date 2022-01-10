import { useState } from 'react';
import { useDispatch } from 'react-redux';

const QaForm = ({ question, element, user }) => {

  const [ text, setText ] = useState('');

  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   setText(question);
  // }, [question])

  const inputHandler = e => {
    const value = e.target.value;
    setText(value);
  }

  const submitAnswer = () => {
    const newAnswer = {
      text: text,
      author: user,
      likes: [],
      dislikes: [],
      createdAt: new Date(),
      question: question.id
    }
    dispatch({ type: 'ADD_ANSWER', payload: newAnswer })
  }

  const submitQuestion = () => {
    const newQuestion = {
      text: text,
      answers: [],
      likes: [],
      dislikes: [],
      author: user,
      createdAt: new Date()
    }
    dispatch({ type: 'ADD_QUESTION', payload: newQuestion })
  }

  const submitQuestionHandler = e => {
    e.preventDefault();
    if(!text.trim()) return;
    if(element === 'question') {
      submitQuestion()
    } else {
      submitAnswer()
    }
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
