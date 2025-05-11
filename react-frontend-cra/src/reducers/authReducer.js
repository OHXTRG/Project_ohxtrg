const initialState = {
  token: null,
  isAuthenticated: false,
  userData: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        userData: action.payload.data,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        userData: null,
        isAuthenticated: false,
      };
    case "FETCH_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "FETCH_USER_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
