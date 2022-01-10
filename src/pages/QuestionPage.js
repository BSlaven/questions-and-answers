import { useSelector } from 'react-redux';

import Answer from '../components/Answer';
import QaForm from '../components/QaForm';

const QuestionPage = () => {

  const userLoggedIn = useSelector(state => state.loggedIn)
  const selectedQuestion = useSelector(state => state.selectedQuestion);
  const questions = useSelector(state => state.questions)
  const myQuestion = questions.find(q => q.id === selectedQuestion.id);
  const answers = myQuestion.answers;
  
  return (
    <div style={{ color: "#1C2833" }} className="container">
      <div className="row mt-5 col-sm-12 col-lg-8">
        <p className="fs-2 col-sm-12">{myQuestion.text}</p>
      </div>
      {userLoggedIn && <QaForm question={selectedQuestion} user={userLoggedIn} element='answer' />}
      <div style={{maxWidth: '600px'}} className="mt-2">
        {answers && answers.map(answer => <Answer key={answer.id} answer={answer} />)}
      </div>
    </div>
  )
}

export default QuestionPage
