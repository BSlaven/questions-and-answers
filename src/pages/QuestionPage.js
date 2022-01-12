import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

import Answer from '../components/Answer';
import QaForm from '../components/QaForm';

const QuestionPage = () => {

  const { id: paramId } = useParams();

  const userLoggedIn = useSelector(state => state.loggedIn)
  const questions = useSelector(state => state.questions)
  const myQuestion = questions.find(q => q.id === paramId) || {};
  const answers = myQuestion.answers || [];
  answers.sort((a, b) => b.createdAt - a.createdAt);
  
  return (
    <div style={{ color: "#1C2833" }} className="container">
      <div className="row mt-5 col-sm-12 col-lg-8">
        <p className="fs-2 col-sm-12">{myQuestion.text || ''}</p>
      </div>
      {userLoggedIn && <QaForm question={myQuestion} user={userLoggedIn} element='answer' />}
      <div style={{maxWidth: '600px'}} className="mt-2">
        {answers && answers.map(answer => <Answer key={answer.answerId} answer={answer} />)}
      </div>
    </div>
  )
}

export default QuestionPage
