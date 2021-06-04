import axios from "axios"

// const baseUrl =
//   "https://cors-anywhere.herokuapp.com/https://api.frontendtest.dev.griyatekno.id";
// const baseUrl = "https://cors-anywhere.herokuapp.com/http://localhost:4000"
const baseUrl = "http://localhost:4000"

export const fetchLoading = () => {
  return {
    type: "START_FETCHING",
  }
}

export const errorStatus = (status) => {
  return {
    type: "ERROR",
    payload: status,
  }
}

export const errMsg = (payload) => {
  return {
    type: "ERROR_MESSAGE",
    payload: payload,
  }
}

export const signOut = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading())

      localStorage.clear()

      // dispatch(isAuth(false))
    } catch (err) {
      dispatch(errorStatus(true))
      dispatch(errMsg(err.response.data.message))
    }
  }
}

export const signIn = (input) => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading())

      const response = await axios.post(`${baseUrl}/login`, input)
      const token = response.data.data

      localStorage.setItem("token", token)

      dispatch({
        type: "TOKEN",
        payload: token,
      })
    } catch (err) {
      dispatch(errorStatus(true))
      dispatch(errMsg(err.response.data.message))
    }
  }
}

export const signUp = (input) => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading())

      const response = await axios.post(`${baseUrl}/register`, input)
      const token = response.data.data.token

      localStorage.setItem("token", token)

      dispatch({
        type: "TOKEN",
        payload: token,
      })
    } catch (err) {
      dispatch(errorStatus(true))
      dispatch(errMsg(err.response.data.message))
    }
  }
}
