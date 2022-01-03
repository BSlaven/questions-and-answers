import { useSelector } from 'react-redux';

import Question from './Question';

const Questions = () => {

  // const question = useSelector(state => state.users[0].question);

  return (
    <div className="d-grid gap-3 col-5 m-3">
      <h3 className="my-3">Questions</h3>
      <Question />
      <Question />
    </div>
  )
}

export default Questions
