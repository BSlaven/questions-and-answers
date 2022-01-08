import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Question from './Question';
import QaForm from './QaForm'

const Questions = ({ displayQuestions }) => {

  const dispatch = useDispatch();

  let questions = useSelector(state => state.questions);

  const questionsToDisplay = displayQuestions || questions;

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_QUESTIONS' })
  }, [dispatch]);

  const userLoggedIn = useSelector(state => state.loggedIn)

  return (
    <div className="col-sm-12 col-md-5 m-3">
      <h3 className="my-4">Questions</h3>
      {userLoggedIn && <QaForm user={userLoggedIn} />}
      {questions && questionsToDisplay.map(question => <Question key={question.id} question={question} />)}
    </div>
  )
}

export default Questions;