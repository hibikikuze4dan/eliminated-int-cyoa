export const updateLocation = (location) => {
  window.scrollTo({ top: 0 });
  return {
    type: "UPDATE_LOCATION",
    payload: location,
  };
};

export const updateAss = (ass) => ({
  type: "UPDATE_ASS",
  payload: ass,
});

export const updateGender = (payload) => ({
  type: "UPDATE_GENDER",
  payload: payload,
});

export const updateIntelligence = (payload) => ({
  type: "UPDATE_INTELLIGENCE",
  payload: payload,
});

export const updateHeight = (payload) => ({
  type: "UPDATE_HEIGHT",
  payload: payload,
});

export const updateExpression = (payload) => ({
  type: "UPDATE_EXPRESSION",
  payload: payload,
});

export const updateAccent = (payload) => ({
  type: "UPDATE_ACCENT",
  payload: payload,
});

export const updateHair = (payload) => ({
  type: "UPDATE_HAIR",
  payload: payload,
});

export const updateBreasts = (payload) => ({
  type: "UPDATE_BREASTS",
  payload: payload,
});

export const updateMidSection = (payload) => ({
  type: "UPDATE_MID-SECTION",
  payload: payload,
});

export const updateHips = (payload) => ({
  type: "UPDATE_HIPS",
  payload: payload,
});

export const updatePussy = (payload) => ({
  type: "UPDATE_PUSSY",
  payload: payload,
});

export const updateCockSize = (payload) => ({
  type: "UPDATE_COCK_SIZE",
  payload: payload,
});

export const updateCockType = (payload) => ({
  type: "UPDATE_COCK_TYPE",
  payload: payload,
});

export const updateBodyTypes = (payload) => ({
  type: "UPDATE_BODY_TYPES",
  payload: payload,
});

export const updateCompanions = (payload) => ({
  type: "UPDATE_COMPANIONS",
  payload: payload,
});

export const updatePerksAndPowers = (payload) => ({
  type: "UPDATE_PERKS_AND_POWERS",
  payload: payload,
});

export const updateOtherStuff = (payload) => ({
  type: "UPDATE_OTHER_STUFF",
  payload: payload,
});

export const updateDrawbacks = (payload) => ({
  type: "UPDATE_DRAWBACKS",
  payload: payload,
});

export const updateJobs = (payload) => ({
  type: "UPDATE_JOBS",
  payload: payload,
});

export const sectionActions = {
  ass: updateAss,
  gender: updateGender,
  intelligence: updateIntelligence,
  height: updateHeight,
  expression: updateExpression,
  accent: updateAccent,
  hair: updateHair,
  breasts: updateBreasts,
  "mid-section": updateMidSection,
  hips: updateHips,
  pussy: updatePussy,
  cock_size: updateCockSize,
  cock_type: updateCockType,
  body_types: updateBodyTypes,
  companions: updateCompanions,
  perks_and_powers: updatePerksAndPowers,
  other_stuff: updateOtherStuff,
  drawbacks: updateDrawbacks,
  jobs: updateJobs,
};
