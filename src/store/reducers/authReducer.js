const initialState = {
  loading: false,
  error: false,
  message: "",
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "START_FETCHING":
      return {
        ...state,
        loading: true,
      }
    case "TOKEN":
      return {
        ...state,
        token: action.payload,
        loading: false,
      }
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      }
    case "ERROR_MESSAGE":
      return {
        ...state,
        message: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
