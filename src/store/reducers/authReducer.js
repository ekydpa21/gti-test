const initialState = {
  loading: false,
  error: false,
  token: undefined,
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
        error: true,
      }
    default:
      return state
  }
}

export default authReducer
