import Axios from "axios";

const config = {
   headers: {
      "Content-Type": "application/json",
   },
};

export const addEvent = (data) => async (dispatch) => {
   try {
      const res = await Axios.post(`/event`, JSON.stringify(data), config);
      console.log(res.data);
   } catch (err) {
      console.log(err.message);
   }
};

export const getEvent = () => async (dispatch) => {
   try {
      const res = await Axios.get("/event");
      console.log(res.data);
   } catch (err) {
      console.log(err.message);
   }
};
