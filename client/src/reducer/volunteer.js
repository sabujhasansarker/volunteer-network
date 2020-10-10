import { REGISTER_VOLUNTEER, GET_VOLUNTEER } from "../action/type";

const initialState = {
   volunteers: [],
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
            volunteers: { payload, ...state.volunteers },
         };
      default:
         return state;
   }
};
