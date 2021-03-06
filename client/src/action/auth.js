import { GET_USER, USER_ERROR } from "./type";
import { google, auth } from "../config/firebase";

import { getSingleVolunteer } from "./volunteer";

export const getUser = () => async (dispatch) => {
   try {
      auth.onAuthStateChanged((user) => {
         dispatch({
            type: user ? GET_USER : USER_ERROR,
            payload: user ? user.providerData[0] : null,
         });
         dispatch(getSingleVolunteer(user && user.providerData[0].email));
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

export const logOut = () => async (dispatch) => {
   console.log("logout");
   try {
      await auth.signOut();
      dispatch(getUser());
   } catch (err) {
      console.log(err.message);
   }
};
