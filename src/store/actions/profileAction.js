import axios from "axios"

// const baseUrl =
//   "https://cors-anywhere.herokuapp.com/https://api.frontendtest.dev.griyatekno.id";
// const baseUrl = "https://cors-anywhere.herokuapp.com/http://localhost:4000"
const baseUrl = "http://localhost:4000"
const token = localStorage.getItem("access_token")

export const fetchLoading = () => {
  return {
    type: "START_FETCHING",
  }
}

export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading())

      const response = await axios.get(`${baseUrl}/profile`, {
        headers: { token },
      })
      // const payload = response.data.data

      dispatch({
        type: "PROFILE_FETCHING",
        payload: response.data.data,
      })
    } catch (err) {
      return {
        type: "ERROR",
      }
    }
  }
}

export const deleteProfile = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading())

      await axios.get(`${baseUrl}/delete/${id}`, {
        headers: { token },
      })

      dispatch(fetchProfile())
    } catch (err) {
      return {
        type: "ERROR",
      }
    }
  }
}

export const editProfile = (updatedTodo) => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading())

      await axios
        .post(`${baseUrl}/update`, updatedTodo, {
          headers: { token },
        })
        .then(({ data }) => {
          console.log(data)
        })
        .catch((err) => console.log(err.response))

      dispatch(fetchProfile())
    } catch (err) {
      return {
        type: "ERROR",
      }
    }
  }
}
