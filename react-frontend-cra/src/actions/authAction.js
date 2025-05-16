import { useDispatch } from "react-redux";
import axios from "axios";

export const authenticate = (data, api) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_USER_REQUEST" });
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/${api}`,
      data
    );

    if (response?.data?.success) {
      const data = response.data;
      dispatch({
        type: "LOGIN",
        payload: {
          token: data.token,
          data: data.data,
        },
      });
    } else {
      dispatch({
        type: "FETCH_USER_FAILURE",
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: "FETCH_USER_FAILURE",
      payload: error.message,
    });
  }
};
