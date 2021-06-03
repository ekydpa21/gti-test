const initialState = {
  loading: false,
  error: false,
  isAuth: false,
}

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case "START_FETCHING":
      return {
        ...state,
        loading: true,
      }
    case "ISAUTH_FETCHING":
      return {
        ...state,
        isAuth: action.payload,
        loading: false,
      }
    case "ERROR":
      return {
        ...state,
        error: true,
      }
    default:
      return state
  }
}

export default profileReducer
