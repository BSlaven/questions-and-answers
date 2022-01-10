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
        ...newState,
        loggedIn: action.user.userId,
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
        questions: [ ...state.questions, action.newQuestion ]
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

      case 'CHANGE_NAME':
        const selectedUser = newState.users.find(user => user.id === action.id);
        const changedUser = {...selectedUser};
        const index = newState.users.findIndex(user => user.id === action.id);
        selectedUser.name = action.name;
        const newArray = newState.users.splice(index, 1, changedUser);
        return { ...newState, users: [ ...newArray ]}

      case 'REMOVE_USER':
        const filteredUsers = newState.users.filter(user => user.id !== action.id)
        return { ...newState, users: [ ...filteredUsers ] }

      case 'SELECTED_QUESTION':
        return { ...newState, selectedQuestion: action.payload }

      case 'NEW_ANSWER':
        const selectedQuestion = newState.questions.find(q => q.id === action.payload.question);
        const updatedQuestion = { ...selectedQuestion }
        updatedQuestion.answers.push(action.payload);
        const questionIndex = newState.questions.findIndex(q => q.id === action.payload.question)
        const newQuestions = newState.questions.splice(questionIndex, 1, updatedQuestion)
        return { ...newState, questions: [ ...newQuestions ] }
      
    default:
      return newState
  }
}

export default reducer;