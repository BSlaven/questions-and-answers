const initialState = {
  users: [],
  questions: [],
  loggedIn: null,
  selectedQuestion: null
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
        const selectedQuestion = {...newState.questions.find(q => q.id === action.payload.question)};
        const questionIndex = newState.questions.findIndex(q => q.id === action.payload.question)
        const newAnswers = [...selectedQuestion.answers]
        newAnswers.push(action.payload)
        selectedQuestion.answers = [ ...newAnswers ]
        const newQuestions = [ ...newState.questions ];
        newQuestions.splice(questionIndex, 1, selectedQuestion)
        return {
          ...newState,
          questions: [ ...newQuestions ]
        }
      
      case 'QUESTION_LIKE':
        const newQuestion = { ...newState.questions.find(q => q.id === action.id)}
        const newIndex = newState.questions.findIndex(q => q.id === action.id)
        const newLikes = [ ...newQuestion.likes ];
        newLikes.push(action.user);
        newQuestion.likes = [ ...newLikes ]
        const likeQuestions = [...newState.questions];
        likeQuestions.splice(newIndex, 1, newQuestion);
        return { ...newState, questions: [...likeQuestions] }

      case 'QUESTION_DISLIKE':
        const dislikeQuestion = { ...newState.questions.find(q => q.id === action.id)}
        const dislikeIndex = newState.questions.findIndex(q => q.id === action.id)
        const questionDislikes = [ ...dislikeQuestion.dislikes ];
        questionDislikes.push(action.user);
        dislikeQuestion.dislikes = [ ...questionDislikes ]
        const dislikeQuestions = [...newState.questions];
        dislikeQuestions.splice(dislikeIndex, 1, dislikeQuestion);
        return { ...newState, questions: [...dislikeQuestions] }

      case 'ANSWER_LIKE':
        const answerLikeQuestion = {...newState.questions.find(q => q.id === action.question)}
        const aLikeIndex = newState.questions.findIndex(q => q.id === action.question);
        answerLikeQuestion.answers = action.answers;
        const answerLikeQuestions = [...newState.questions];
        answerLikeQuestions.splice(aLikeIndex, 1, answerLikeQuestion);
        return { ...newState, questions: [...answerLikeQuestions] }

      case 'ANSWER_DISLIKE':
        const answerDislikeQuestion = {...newState.questions.find(q => q.id === action.question)}
        const aDislikeIndex = newState.questions.findIndex(q => q.id === action.question);
        answerDislikeQuestion.answers = action.answers;
        const answerDislikeQuestions = [ ...newState.questions ]
        answerDislikeQuestions.splice(aDislikeIndex, 1, answerDislikeQuestion);
        return { ...newState, questions: [...answerDislikeQuestions] }
      
    default:
      return newState
  }
}

export default reducer;