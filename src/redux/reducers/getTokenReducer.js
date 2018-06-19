
import { GET_TOKEN } from "../actions/getTokenAction";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_TOKEN:
        return {...state, accessToken: action.payload.data};
    default:
      return state;
  }
}