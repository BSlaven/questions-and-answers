const initialState = {
  users: [],
  questions: [],
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
      console.log('logged in user: ', action.user.uid);
      return {
        ...state,
        loggedIn: action.user.uid
      }

    case 'SIGN_OUT_USER':
      return {
        ...state,
        loggedIn: null
      }

    case 'FETCH_QUESTIONS_ASYNC':
      console.log('Ovo je u questons reduceru: ', action.questions)
      return {
        ...newState,
        questions: action.questions
      }

    case 'NEW_QUESTION':
      return {
        ...state,
        question: [...state.questions, action.payload]
      }
      
    default:
      return newState
  }
}

export default reducer;