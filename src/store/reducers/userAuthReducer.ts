import { UserAuthAction, UserAuthActionTypes, UserAuthState } from "../types/types";

const initialState: UserAuthState = {
  user:
    {
      email: null,
      token: null,
      id: null
    }
};

export const userAuthReducer = (state = initialState, action: UserAuthAction) => {
  switch (action.type) {
    case UserAuthActionTypes.SET_USER:
      return { ...state, user: action.payload };
    case UserAuthActionTypes.REMOVE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};