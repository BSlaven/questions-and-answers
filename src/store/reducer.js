const initialState = {
  users: []
}

export const reducer = (state = initialState, action) => {
  const newState = state;

  switch (action.type) {
    case 'FETCH_USERS_ASYNC':
      console.log('action users: ', action.users)
      return {...newState, users: action.users}
    
    case 'REG_USER':
      console.log(action.user);
      break;
      
    default:
      return newState
  }
}

export default reducer;