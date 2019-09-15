import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";
import classes from "./info.module.css";
import StateLegislation from "./StateLegislation";
import InfoNavBar from "./infoNavbar";
import DogAccess from "./DogAccess";
import Federal from "./Federal";
import { InfoSwiperContext } from "../contexts/InfoSwiperContext"

class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <InfoSwiperContext.Consumer>
        {infoContext => (
          <div>
            <InfoNavBar />
            <SwipeableViews
              enableMouseEvents
              resistance
              index={infoContext.index}
              onChangeIndex={infoContext.handleChangeIndex}
            >
              <div className={classes.slide} axis="x-reverse">
                <DogAccess></DogAccess>
              </div>
              <div className={classes.slide}>
                <StateLegislation></StateLegislation>
              </div>
              <div className={classes.slide}>
                <Federal></Federal>
              </div>
            </SwipeableViews>
          </div>
        )}
      </InfoSwiperContext.Consumer>
    );
  }
}

export default Info;
