import axios from "axios";

const baseUrl =
  "https://cors-anywhere.herokuapp.com/https://api.frontendtest.dev.griyatekno.id";

export const fetchLoading = () => {
  return {
    type: "START_FETCHING",
  };
};

export const signOut = (status) => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading());

      localStorage.clear();

      dispatch({
        type: "ISAUTH_FETCHING",
        payload: status,
      });
    } catch (err) {
      return {
        type: "ERROR",
      };
    }
  };
};

export const signIn = (input) => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading());

      await axios
        .post(`${baseUrl}/login`, input)
        .then(({ data }) => {
          if (data) {
            localStorage.setItem("access_token", data.data);
          }
        })
        .catch((err) => console.log(err));
    } catch (err) {
      return {
        type: "ERROR",
      };
    }
  };
};

export const signUp = (input) => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading());

      await axios
        .post(`${baseUrl}/register`, input)
        .then(({ data }) => {
          if ({ data }) {
            console.log(data);
          }
        })
        .catch((err) => console.log(err));

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
      };
    }
  };
};
