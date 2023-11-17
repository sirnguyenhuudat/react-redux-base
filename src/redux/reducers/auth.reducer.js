import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_PENDING, LOGOUT_FAIL } from "../actions/auth.action";

const initState = {
  username: "",
  token: "",
  isAdmin: false,
  userId: null,
  userInfo: {},
  isLoading: false,
  message: '',
};

const authReducer = (state = initState, action) => {
  const authData = action.payload;
  switch (action.type) {
    case LOGIN_PENDING:
    case LOGOUT_PENDING:
      return {
        ...state,
        isLoading: true,
        message: '',
      }
    case LOGIN_FAIL:
    case LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        message: action.message,
      }
    case LOGIN_SUCCESS:
      const userInfo = {
        userId: authData.userId,
        firstName: authData.firstName,
        lastName: authData.lastName,
        isAdmin: authData.isAdmin,
      };
      return {
        ...state,
        userInfo,
        username: authData.username,
        token: authData.token,
        isAdmin: authData.isAdmin,
        userId: authData.userId,
        isLoading: false,
        message: '',
      };
    case LOGOUT_SUCCESS:
      localStorage.clear();
      return initState;
    default:
      return state;
  }
};

export default authReducer;
