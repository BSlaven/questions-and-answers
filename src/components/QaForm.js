import { useEffect, useState } from 'react';

const QaForm = ({ question, user }) => {

  const [ text, setText ] = useState('');
  
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
    }

    console.log('created user in the qa form', newQuestion);
    setText('');
  }
  
  return (
    <form
      style={{backgroundColor: '#D5F5E3'}}
      onSubmit={submitQuestionHandler}
      className="col-12 d-flex rounded flex-column p-2 mb-4">
      <textarea
        className="col-12 border-white p-1 mb-3"
        value={text || ''}
        onChange={inputHandler}
        type="text" />
      <button className="col-sm-12 col-lg-6 btn btn-primary">ADD QUESTION</button>
    </form>
  )
}

export default QaForm
