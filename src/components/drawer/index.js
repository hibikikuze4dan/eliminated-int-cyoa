import React from "react";
import { Drawer, Button, Typography } from "@material-ui/core";
import { getSectionTitlesArray } from "../../redux/selectors";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateLocation } from "../../redux/actions";

const NavigationDrawer = ({
  handleBackgroundClick,
  sections,
  open,
  classes,
  updateLocation,
  location,
}) => {
  return (
    <Drawer
      open={open}
      ModalProps={{ onBackdropClick: () => handleBackgroundClick(!open) }}
      classes={{ paper: classes.drawer }}
      anchor="left"
    >
      {sections.map((section, index) => {
        return (
          <Button
            key={`drawer-link-${index + 1}-${section.link}`}
            component={Link}
            onClick={() => {
              handleBackgroundClick(!open);
              return updateLocation(section.link);
            }}
            to={section.link}
            className={location === section.link ? classes.selectedButton : ""}
          >
            <Typography>{section.title}</Typography>
          </Button>
        );
      })}
    </Drawer>
  );
};

NavigationDrawer.defaultProps = {
  open: true,
  handleBackgroundClick: () => null,
  updateLocation: () => null,
  sections: [],
  classes: {},
  location: "",
};

const mapStateToProps = (state) => ({
  sections: getSectionTitlesArray(state),
});

export default connect(mapStateToProps, { updateLocation })(NavigationDrawer);
