import { GET_USER, USER_ERROR } from "../action/type";

const initialState = {
  user: null,
  loading: true,
  isAuth: false,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuth: true,
      };
    case USER_ERROR:
      return {
        ...state,
        user: payload,
        isAuth: false,
      };
    default:
      return state;
  }
};
