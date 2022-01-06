import Question from './Question';
import QaForm from './QaForm'

const Questions = () => {

  return (
    <div className="col-5 m-3">
      <h3 className="my-4">Questions</h3>
      <Question />
      <Question />
      <QaForm question='slaven' />
    </div>
  )
}

export default Questions
