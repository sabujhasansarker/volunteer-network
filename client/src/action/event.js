import Axios from "axios";

const configData = (fromData) => {
   const config = {
      headers: {
         "Content-Type": "application/json",
      },
   };
   const body = JSON.stringify(fromData);
   return { config, body };
};

export const addEvent = (data) => async (dispatch) => {
   const config = {
      headers: {
         "Content-Type": "application/json",
      },
   };
   const body = JSON.stringify(data);
   try {
      const res = await Axios.post(`/event`, body, config);
      console.log(res.data);
   } catch (err) {
      console.log(err.message);
   }
};
