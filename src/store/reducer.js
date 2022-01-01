const initialState = {
  users: [],
  questions: [],
  currentUser: {}
}

const reducer = (state = initialState, action) => {
  const newState = state;

  switch (action.type) {
    case 'FETCH_USER_ASYNC':
      return {...newState, currentUser: action.user}
    
    default:
      return newState
  }
}

export default reducer;