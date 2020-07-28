import { createSelector } from "reselect";
import { List } from "immutable";

export const getRequiredDrawbacks = (state) => state.get("requiredDrawbacks");

export const getOutline = (state) => state.get("outline");

export const getLocation = (state) => state.get("location");

export const getChoices = (state) => state.get("choices");

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

export const getLocationChoices = createSelector(
  [getLocation, getChoices],
  (location, choices) => {
    return choices.get(location, List([]));
  }
);

export const getLocationChoicesNames = createSelector(
  [getLocationChoices],
  (choices) => {
    return choices.toJS().map((choice) => choice.title);
  }
);

export const getExpressionAndAccentChoices = createSelector(
  [getChoices],
  (choices) => {
    return choices.get("expression").concat(choices.get("accent"));
  }
);

export const getDrawbacks = createSelector([getChoices], (choices) => {
  return choices.get("drawbacks");
});

export const getDisabledDrawbacks = createSelector(
  [getExpressionAndAccentChoices, getDrawbacks],
  (relevantChoices, drawbacks) => {
    const requiredDrawbacks = relevantChoices.reduce((acc, curr) => {
      const accumulator = acc;
      if (curr?.drawback) {
        accumulator.push(curr?.drawback);
      }
      return accumulator;
    }, []);
    return drawbacks
      .filter((drawback) => {
        return requiredDrawbacks.includes(drawback.title);
      })
      .reduce((curr, acc) => {
        const accumulator = curr;
        accumulator.push(acc.title);
        return accumulator;
      }, []);
  }
);
