import { useSelector } from 'react-redux'
import { useState } from 'react';

import Question from './Question';
import QaForm from './QaForm'

const Questions = ({ displayQuestions }) => {

  const [ byDate, setByDate ] = useState(true);

  let questions = useSelector(state => state.questions);

  let questionsToDisplay = displayQuestions || questions;
  questionsToDisplay = byDate ? 
    questionsToDisplay.sort((a, b) => b.createdAt - a.createdAt) :
    questionsToDisplay.sort((a, b) => b.likes.length - a.likes.length)

  const userLoggedIn = useSelector(state => state.loggedIn)

  const orderHotest = () => {
    setByDate(false)
  }

  const orderLatest = () => {
    setByDate(true)
  }

  return (
    <div className="py-4 col-sm-12 col-lg-5 m-3">
      <div className="row d-flex mb-2 align-items-center">
        <h3 className="col-6">Questions</h3>
        <button
          style={{ cursor: 'pointer', maxWidth: '80px' }}
          onClick={orderHotest}
          className="col-3 btn btn-outline-success p-0">hot</button>
        <button
          style={{ cursor: 'pointer', maxWidth: '80px' }}
          onClick={orderLatest}
          className="col-3 btn btn-outline-primary p-0 ms-3">latest</button>
      </div>
      {userLoggedIn && <QaForm user={userLoggedIn} element="question" />}
      {questions && questionsToDisplay.map(question => <Question key={question.id} question={question} />)}
    </div>
  )
}

export default Questions;