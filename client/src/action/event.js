import Axios from "axios";
import { ADD_EVENT, GET_EVENT } from "./type";

const config = {
   headers: {
      "Content-Type": "application/json",
   },
};

export const addEvent = (data) => async (dispatch) => {
   try {
      const res = await Axios.post(`/event`, JSON.stringify(data), config);
      dispatch({
         type: ADD_EVENT,
         payload: res.data,
      });
   } catch (err) {
      console.log(err.message);
   }
};

export const getEvent = () => async (dispatch) => {
   try {
      const res = await Axios.get("/event");
      dispatch({
         type: GET_EVENT,
         payload: res.data,
      });
   } catch (err) {
      console.log(err.message);
   }
};
