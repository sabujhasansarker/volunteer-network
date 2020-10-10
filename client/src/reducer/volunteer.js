import { REGISTER_VOLUNTEER, GET_VOLUNTEER, VOLUNTEER } from "../action/type";

const initialState = {
   volunteers: [],
   volunteer: null,
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
      case VOLUNTEER:
         return {
            ...state,
            volunteer: state.volunteers.find(
               (volunteer) => volunteer.email == payload && volunteer
            ),
         };
      default:
         return state;
   }
};
