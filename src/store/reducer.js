const initialState = {
  users: [],
  questions: [],
  currentUser: {}
}

const reducer = (state = initialState, action) => {
  const newState = state;

  switch (action.type) {
    case 'FETCH_USERS_ASYNC':
      return {...newState, users: ['Slaven', 'Ogi']}
      break;
    
    case 'FETCH_QUESTIONS_ASYNC':
      return {...newState, questions: ['one', 'two']}
      break;
    
    default:
      return newState
  }
}

export default reducer;