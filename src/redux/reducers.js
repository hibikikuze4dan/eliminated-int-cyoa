import { fromJS, isKeyed } from "immutable";
import cyoaText from "../data";

const initialState = fromJS(
  {
    outline: cyoaText.default,
    initRequiredDrawbacks: 3,
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
  return state;
};
