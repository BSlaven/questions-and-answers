import { useEffect, useState } from 'react';

const QaForm = ({ question }) => {

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
    console.log(text);
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
      <button className="col-6 btn btn-primary">ADD QUESTION</button>
    </form>
  )
}

export default QaForm