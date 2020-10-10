import Axios from "axios";
import { ADD_EVENT, GET_EVENT, GET_SINGLE } from "./type";

const config = {
   headers: {
      "Content-Type": "application/json",
   },
};

export const registerVolunteer = (data, id) => async (dispatch) => {
   try {
      console.log(data);
      const body = JSON.stringify(data);
      const res = await Axios.post(`/${id}`, body, config);
      console.log(res.data);
   } catch (err) {
      console.log(err.message);
   }
};
