import {
   REGISTER_VOLUNTEER,
   GET_VOLUNTEER,
   VOLUNTEER,
   ERROR_VOLUNTEER,
} from "../action/type";

const initialState = {
   volunteers: [],
   volunteer: [],
};

export default (state = initialState, action) => {
   const { payload, type } = action;
   switch (type) {
      case GET_VOLUNTEER:
         return {
            ...state,
            volunteers: payload,
         };
      case REGISTER_VOLUNTEER:
         return {
            ...state,
            volunteers: [...state.volunteers, payload],
         };
      case VOLUNTEER:
         return {
            ...state,
            volunteer: payload,
         };
      case ERROR_VOLUNTEER:
         return {
            ...state,
            volunteer: [],
         };
      default:
         return state;
   }
};
