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

export const fetchProfile = (token) => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading())

      const response = await axios.get(`${baseUrl}/profile`, {
        headers: { token },
      })

      console.log(response)

      dispatch({
        type: "PROFILE_FETCHING",
        payload: response.data.data,
      })
    } catch (err) {
      console.log(err.response)
      return {
        type: "ERROR",
      }
    }
  }
}

export const deleteProfile = (token, id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading())

      await axios.get(`${baseUrl}/delete/${id}`, {
        headers: { token },
      })

      dispatch(fetchProfile(token))
    } catch (err) {
      console.log(err.response)
      return {
        type: "ERROR",
      }
    }
  }
}

export const editProfile = (token, updatedTodo) => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading())

      await axios.post(`${baseUrl}/update`, updatedTodo, {
        headers: { token },
      })

      dispatch(fetchProfile(token))
    } catch (err) {
      console.log(err.response)
      return {
        type: "ERROR",
      }
    }
  }
}
