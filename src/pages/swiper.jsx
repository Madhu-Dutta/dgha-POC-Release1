import React, { Component } from "react"
import Landing from "./landing"
import Info from "./info"
import SwipeableViews from "react-swipeable-views"
import Div100vh from "react-div-100vh"
import {SwiperContext} from "../contexts/SwiperContext";
import InfoSwiperWrapper from "../components/InfoSwiperWrapper";

const styles = {
  slide: {
    height: "100vh",
  },
}

class Swiper extends Component {
  constructor(props) {
    super(props)

    this.resetIndex = () => {
      this.setState({
        index: 0,
      })
    }
    this.increaseIndex = () => {
      this.setState({
        index: 1,
      })
    }
    this.handleChangeIndex = index => {
      this.setState({
        index,
      })
    }

    this.state = {
      index: 0,
      resetIndex: this.resetIndex,
      increaseIndex: this.increaseIndex,
      handleChangeIndex: this.handleChangeIndex,
    }
  }

  render() {
    return (
      <Div100vh>
        <SwiperContext.Provider value={this.state}>
          <SwipeableViews
            index={this.state.index}
            onChangeIndex={this.handleChangeIndex}
            containerStyle={styles.slide}
            axis="y"
            resistance
          >
            <InfoSwiperWrapper>
              <Landing />
              <Info reset={this.resetIndex} from="en" to={this.state.currentLang} />
            </InfoSwiperWrapper>
          </SwipeableViews>
        </SwiperContext.Provider>
      </Div100vh>
    )
  }
}

export default Swiper
