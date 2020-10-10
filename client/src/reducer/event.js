import { GET_EVENT, ADD_EVENT, GET_SINGLE } from "../action/type";

const initialState = {
   events: [],
   event: null,
};

export default (state = initialState, action) => {
   const { payload, type } = action;
   switch (type) {
      case GET_EVENT:
         return {
            ...state,
            events: payload,
         };
      case GET_SINGLE:
         return {
            ...state,
            event: state.events && state.events.find((ev) => ev._id == payload),
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
