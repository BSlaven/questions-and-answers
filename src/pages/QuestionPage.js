import { useSelector } from 'react-redux';

import Answer from '../components/Answer';
import QaForm from '../components/QaForm';

const QuestionPage = () => {

  const userLoggedIn = useSelector(state => state.loggedIn)
  const selectedQuestion = useSelector(state => state.selectedQuestion)
  console.log('Pitanje koje je došlo u QuestionPage: ', selectedQuestion);

  return (
    <div style={{ color: "#1C2833" }} className="container">
      <div className="row mt-5 col-sm-12 col-lg-8">
        <p className="fs-2 col-sm-12">Ovo je tekst pitanja</p>
      </div>
      {userLoggedIn && <QaForm user={userLoggedIn} element='answer' />}
      <div style={{maxWidth: '600px'}} className="mt-2">
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  )
}

export default QuestionPage
