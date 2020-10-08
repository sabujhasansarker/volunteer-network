import { GET_USER } from "./type";
import { google, auth } from "../config/firebase";

export const getUser = () => async (dispatch) => {
  try {
    auth.onAuthStateChanged((user) => {
      dispatch({
        type: GET_USER,
        payload: user.providerData[0],
      });
      console.log(user.providerData[0]);
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const googleLogin = () => async (dispatch) => {
  try {
    await auth.signInWithPopup(google);
    dispatch(getUser());
  } catch (err) {
    console.log(err.message);
  }
};
