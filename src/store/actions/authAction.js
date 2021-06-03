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

export const signOut = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading())

      localStorage.clear()

      // dispatch(isAuth(false))
    } catch (err) {
      return {
        type: "ERROR",
      }
    }
  }
}

export const signIn = (input) => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading())

      await axios
        .post(`${baseUrl}/login`, input)
        .then(({ data }) => {
          console.log(data)
          if (data) {
            localStorage.setItem("access_token", data.data)
          }
        })
        .catch((err) => console.log(err.response.data.message))
    } catch (err) {
      return {
        type: "ERROR",
      }
    }
  }
}

export const signUp = (input) => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading())

      await axios
        .post(`${baseUrl}/register`, input)
        .then(({ data }) => {
          if ({ data }) {
            const { token } = data.data
            localStorage.setItem("access_token", token)
            // dispatch(isAuth(true))
            console.log(token)
          }
        })
        .catch((err) => console.log(err.response))

      // fetch(`${baseUrl}/register`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(input),
      // })
      //   .then(({ data }) => {
      //     if (data) {
      //       console.log(data);
      //     } else {
      //       console.log("fail");
      //     }
      //   })
      //   .catch((err) => console.log(err, "----"));
    } catch (err) {
      return {
        type: "ERROR",
      }
    }
  }
}
