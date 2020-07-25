import isEqual from "lodash/isEqual";

import { getLocationChoices, getLocation } from "./selectors";

const updateChoiceSection = (state, section, updatedChoices) => {
  return state.set(
    "choices",
    state.get("choices").set(section, updatedChoices)
  );
};

export const singleChoiceUpdate = (state, choice) => {
  const location = getLocation(state);
  const currentChoices = getLocationChoices(state);
  const includes = isEqual(currentChoices.toJS()[0], choice);
  let updatedChoices = null;
  if (includes) {
    updatedChoices = currentChoices.pop();
  } else {
    updatedChoices = currentChoices.pop().push(choice);
  }
  return updateChoiceSection(state, location, updatedChoices);
};

export const multiChoiceUpdate = (state, choice, choiceType) => {
  if (!choice) {
    return state;
  }
  const location = choiceType || getLocation(state);
  const currentChoices = state.get("choices").get(location);
  const index = currentChoices.findIndex((currentChoice) => {
    return currentChoice.title === choice.title;
  });
  let updatedChoices = null;
  if (index > -1) {
    updatedChoices = currentChoices.delete(index);
  } else {
    updatedChoices = currentChoices.push(choice);
  }
  return updateChoiceSection(state, location, updatedChoices);
};

export const getRelevantDrawback = (state, choice) => {
  if (!choice?.drawback) {
    return null;
  }
  const drawbacks = state
    .get("outline")
    .get("sections")
    .get("drawbacks")
    .get("choices");
  const relevantDrawback = drawbacks.find((drawback) => {
    return drawback.get("title") === choice.drawback;
  });

  return relevantDrawback ? relevantDrawback.toJS() : null;
};

export const expAccUpdate = (state, choice) => {
  const location = getLocation(state);
  const currentChoices = getLocationChoices(state);
  const relevantDrawback = getRelevantDrawback(state, choice);
  const includes = isEqual(currentChoices.toJS()[0], choice);
  let otherRelevantDrawback = null;
  let updatedChoices = null;
  if (includes) {
    updatedChoices = currentChoices.pop();
  } else {
    otherRelevantDrawback = getRelevantDrawback(
      state,
      currentChoices.get(0, {})
    );
    updatedChoices = currentChoices.pop().push(choice);
  }
  let updatedState = updateChoiceSection(state, location, updatedChoices);
  if (otherRelevantDrawback) {
    updatedState = multiChoiceUpdate(
      updatedState,
      otherRelevantDrawback,
      "drawbacks"
    );
  }
  console.log(relevantDrawback);
  return multiChoiceUpdate(updatedState, relevantDrawback, "drawbacks");
};
