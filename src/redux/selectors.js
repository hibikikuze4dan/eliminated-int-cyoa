import { createSelector } from "reselect";

export const getRequiredDrawbacks = (state) => state.get("requiredDrawbacks");

export const getOutline = (state) => state.get("outline");

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
