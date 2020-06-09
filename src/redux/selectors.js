import { createSelector } from "reselect";

export const getRequiredDrawbacks = (state) => state.get("requiredDrawbacks");

export const getOutline = (state) => state.get("outline");

export const getLocation = (state) => state.get("location");

export const getSections = createSelector(getOutline, (outline) => {
  return outline.get("sections");
});

export const getSectionTitles = createSelector(getSections, (sections) => {
  return sections.map((section) => section.get("title"));
});

export const getSectionTitlesArray = createSelector(
  getSectionTitles,
  (sections) => {
    return sections.reduce((acc, curr, key) => {
      const accumulator = acc;
      accumulator.push({ title: curr, link: key });
      return accumulator;
    }, []);
  }
);

export const getPreviousAndNextSection = createSelector(
  [getSectionTitlesArray, getLocation],
  (sections, location) => {
    const index = sections.findIndex((val) => {
      return val.link === location;
    });
    return [
      sections[index - 1] ? sections[index - 1] : sections[sections.length - 1],
      sections[index + 1] ? sections[index + 1] : sections[0],
    ];
  }
);

export const getLocationData = createSelector(
  [getLocation, getSections],
  (location, sections) => {
    return sections.get(location);
  }
);
