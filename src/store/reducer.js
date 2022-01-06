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
      
    default:
      return newState
  }
}

export default reducer;