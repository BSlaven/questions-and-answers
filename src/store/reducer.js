const initialState = {
  users: [],
  loggedIn: null
}

export const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'FETCH_USERS_ASYNC':
      console.log('action users: ', action.users)
      return {...newState, users: action.users}
    
    case 'REG_USER':
      return {
        ...state,
        loggedIn: action.user,
        users: [...state.users, action.user]
      }
    
    case 'SIGN_IN_USER':
      console.log('logged in user: ', action.user);
      break

    case 'SIGN_OUT_USER':
      return {
        ...state,
        loggedIn: null
      }
      
    default:
      return newState
  }
}

export default reducer;