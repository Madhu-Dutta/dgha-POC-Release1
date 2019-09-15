import React, { Component } from "react";
import { InfoSwiperContext } from "../contexts/InfoSwiperContext";

class InfoSwiperWrapper extends Component {
  constructor(props) {
    super(props);

    this.nextClick = () => {
      if (this.state.index <= 1) {
        this.setState({
          index: this.state.index + 1,
        });
      }
    };
    this.prevClick = () => {
      if (this.state.index >= 1) {
        this.setState({
          index: this.state.index - 1,
        });
      }
    };
    this.handleChangeIndex = index => {
      this.setState({
        index,
      });
    };
    this.resetIndex = () => {
      this.setState({
        index: 0,
      });
    };
    this.contentsClick = event => {
      let newIndex = parseInt(event.target.getAttribute("data-val"));
      this.setState({
        index: newIndex,
      });
    };

    this.state = {
      index: 0,
      prevClick: this.prevClick,
      nextClick: this.nextClick,
      handleChangeIndex: this.handleChangeIndex,
      resetIndex: this.resetIndex,
      contentsClick: this.contentsClick,
    };
  }

  render() {
    return (
      <InfoSwiperContext.Provider value={this.state}>
        {this.props.children}
      </InfoSwiperContext.Provider>
    );
  }
}

export default InfoSwiperWrapper;
