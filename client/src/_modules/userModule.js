import axios from "axios";

// action name
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";

// action creator
export const login = (username) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  const { data } = await axios.post('http://localhost:5000/api/users/login', {username});
  dispatch({ type: LOGIN_SUCCESS, payload: data });
}

// reducer
export default function userReducer(initialState = { user : {} }, action) {
  switch(action.type) {
    case LOGIN_REQUEST :
      return {
        loading: true,
        isAuthenticated: false,
      }
    case LOGIN_SUCCESS :
      return {
        ...initialState,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
      }
    default :
      return initialState;
  }
}