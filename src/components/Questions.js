import { useSelector } from 'react-redux'

import Question from './Question';
import QaForm from './QaForm'

const Questions = ({ displayQuestions }) => {

  let questions = useSelector(state => state.questions);

  const questionsToDisplay = displayQuestions || questions;

  const userLoggedIn = useSelector(state => state.loggedIn)

  return (
    <div className="col-sm-12 col-md-5 m-3">
      <h3 className="my-4">Questions</h3>
      {userLoggedIn && <QaForm user={userLoggedIn} element="question" />}
      {questions && questionsToDisplay.map(question => <Question key={question.id} question={question} />)}
    </div>
  )
}

export default Questions;