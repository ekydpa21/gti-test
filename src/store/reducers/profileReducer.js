const initialState = {
  loading: false,
  error: false,
  profile: null,
}

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case "START_FETCHING":
      return {
        ...state,
        loading: true,
      }
    case "PROFILE_FETCHING":
      return {
        ...state,
        profile: action.payload,
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
