import {axiosInstance} from "../../services/axios.service";
import {find} from "lodash";
import { toast } from 'react-toastify';

export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_PENDING = "LOGOUT_PENDING";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export const login = (payload) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_PENDING });
    const users = await axiosInstance.get('/users');
    const user = find(users?.data, u => u.username === payload.username && u.password === payload.password);
    if (user) {
      dispatch({ type: LOGIN_SUCCESS, payload: {...user} });
      toast.success(`Welcome back, ${user.firstName}`)
    } else {
      toast.error('Username or password invalid');
    }
  } catch (e) {
    dispatch({ type: LOGIN_FAIL, message: e?.message });
    toast.error(e?.message || 'Server Error');
  }
}

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
}
