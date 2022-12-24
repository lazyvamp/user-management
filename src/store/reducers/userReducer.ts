import { userReduderAction } from "../../types/storeType";
import { userType } from "../../types/user";
import {
  USER_DELETED,
  USER_EDITED,
  USER_LIKED,
  USER_STORED,
} from "../actionTypes";

export default function userReducer(state = [], action: userReduderAction) {
  const { type, payload } = action;

  switch (type) {
    case USER_STORED:
      return (state = payload);
    case USER_EDITED:
      return state.map((user: userType) => {
        if (user.id === payload?.id) {
          return payload;
        }
        return user;
      });
    case USER_LIKED:
      return state.map((user: userType) => {
        if (user.id === payload?.id) {
          return {
            ...user,
            isLiked: payload?.isLiked || false,
          };
        }
        return user;
      });
    case USER_DELETED:
      return state.filter((user: userType) => user.id !== payload?.id);
    default:
      return state;
  }
}
