const initialState = {
  users: [],
  questions: [],
  loggedIn: null
}

export const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'FETCH_USERS_ASYNC':
      return {...newState, users: action.users}
    
    case 'REG_USER':
      return {
        ...state,
        loggedIn: action.user,
        users: [...state.users, action.user]
      }

    case 'FETCH_QUESTIONS_ASYNC':
      return {
        ...newState,
        questions: action.questions
      }

    case 'NEW_QUESTION':
      return {
        ...state,
        question: [...state.questions, action.payload]
      }

    case 'USER_IN_ASYNC':
      return {
        ...newState,
        loggedIn: action.id
      }

      case 'USER_OUT_ASYNC':
      return {
        ...newState,
        loggedIn: null
      }
      
    default:
      return newState
  }
}

export default reducer;