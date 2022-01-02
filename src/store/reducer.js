const initialState = {
  users: []
}

const reducer = (state = initialState, action) => {
  const newState = state;

  switch (action.type) {
    case 'FETCH_USERS_ASYNC':
      return {...newState, users: action.users}
    
    default:
      return newState
  }
}

export default reducer;