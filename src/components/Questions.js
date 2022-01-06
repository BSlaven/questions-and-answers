import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Question from './Question';
import QaForm from './QaForm'

const Questions = () => {

  const dispatch = useDispatch();

  let questions = useSelector(state => state.questions);
  console.log('Ovo je u questions komponenti', questions);
  
  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_QUESTIONS' })
  }, [dispatch]);

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
