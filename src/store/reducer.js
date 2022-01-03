const initialState = {
  users: []
}

const reducer = (state = initialState, action) => {
  const newState = state;

  switch (action.type) {
    case 'FETCH_USERS_ASYNC':
      return {...newState, users: action.users}
    
    case 'REG_USER':
      console.log('podatak je došao u reducer')
      break;
      
    default:
      return newState
  }
}

export default reducer;