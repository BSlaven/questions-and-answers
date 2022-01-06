import { useSelector } from 'react-redux'

import Question from './Question';
import QaForm from './QaForm'

const Questions = () => {

  const userLoggedIn = useSelector(state => state.loggedIn)

  return (
    <div className="col-5 m-3">
      <h3 className="my-4">Questions</h3>
      <QaForm question='slaven' user={userLoggedIn} />
      <Question />
      <Question />
    </div>
  )
}

export default Questions
