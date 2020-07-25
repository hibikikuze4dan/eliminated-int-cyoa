import React, { Fragment } from "react";
import { GridList, withWidth, GridListTile } from "@material-ui/core";
import { map } from "lodash";
import { connect } from "react-redux";

import ChoiceCard from "../choice-card";
import { getLocationChoicesNames } from "../../redux/selectors";

const columns = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 3,
};

const ChoiceList = ({
  choices,
  width,
  handleClick,
  location,
  locationChoices,
}) => {
  return (
    <Fragment>
      <GridList cols={columns[width]} cellHeight="auto" spacing={16}>
        {map(choices.toJS(), (choice, index) => {
          return (
            <GridListTile key={`grid-list-${choice.title}-${index}`}>
              <ChoiceCard
                data={choice}
                handleClick={handleClick}
                location={location}
                picked={locationChoices.includes(choice.title)}
              />
            </GridListTile>
          );
        })}
      </GridList>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    locationChoices: getLocationChoicesNames(state),
  };
};

export default connect(mapStateToProps)(withWidth()(ChoiceList));
