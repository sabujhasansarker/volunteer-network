import { GET_EVENT, ADD_EVENT } from "../action/type";

const initialState = {
   events: [],
};

export default (state = initialState, action) => {
   const { payload, type } = action;
   switch (type) {
      case GET_EVENT:
         return {
            ...state,
            events: payload,
         };
      case ADD_EVENT:
         return {
            ...state,
            events: [payload, ...state.events],
         };
      default:
         return state;
   }
};
