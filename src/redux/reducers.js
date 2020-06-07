import { fromJS, isKeyed } from "immutable";
import cyoaText from "../data";

const initialState = fromJS(
  {
    location: window.location.href.split("/").pop()
      ? window.location.href.split("/").pop()
      : "opening",
    outline: cyoaText.default,
    initRequiredDrawbacks: 3,
    requiredDrawbacks: 3,
  },
  (key, value) => {
    if (key === "choices" || key === "sections") {
      return value.toOrderedMap();
    } else if (isKeyed(value)) {
      return value.toMap();
    }
    return value.toList();
  }
);

export const rootReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_LOCATION") {
    return state.set("location", action.payload);
  }
  return state;
};
