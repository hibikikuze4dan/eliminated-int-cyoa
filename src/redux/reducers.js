import { fromJS, isKeyed } from "immutable";
import cyoaText from "../data";
import { singleChoiceUpdate, expAccUpdate } from "./utils";

const initialState = fromJS(
  {
    location: window.location.href.split("/").pop()
      ? window.location.href.split("/").pop()
      : "opening",
    outline: cyoaText.default,
    initRequiredDrawbacks: 3,
    requiredDrawbacks: 3,
    choices: {
      gender: [],
      intelligence: [],
      height: [],
      expression: [],
      accent: [],
      hair: [],
      breasts: [],
      "mid-section": [],
      hips: [],
      ass: [],
      pussy: [],
      cock_size: [],
      cock_type: [],
      body_types: [],
      companions: [],
      perks_and_powers: [],
      other_stuff: [],
      drawbacks: [],
      jobs: [],
    },
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

const singleChoiceSections = [
  "UPDATE_GENDER",
  "UPDATE_ASS",
  "UPDATE_INTELLIGENCE",
  "UPDATE_HEIGHT",
  "UPDATE_HAIR",
  "UPDATE_BREASTS",
  "UPDATE_MID-SECTION",
  "UPDATE_HIPS",
  "UPDATE_PUSSY",
  "UPDATE_COCK_SIZE",
  "UPDATE_COCK_TYPE",
  "UPDATE_BODY_TYPES",
  "UPDATE_JOBS",
];

const expressionAndAccent = ["UPDATE_EXPRESSION", "UPDATE_ACCENT"];

export const rootReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_LOCATION") {
    return state.set("location", action.payload);
  } else if (singleChoiceSections.includes(action.type)) {
    return singleChoiceUpdate(state, action.payload);
  } else if (expressionAndAccent.includes(action.type)) {
    return expAccUpdate(state, action.payload);
  }
  return state;
};
