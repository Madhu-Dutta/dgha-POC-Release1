import React from "react";
import classes from "./info.module.css";
import {
  Button,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { InfoSwiperContext } from "../contexts/InfoSwiperContext"
import { SwiperContext } from "../contexts/SwiperContext"

class InfoNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  contentsClick = event => {
    let newIndex = parseInt(event.target.getAttribute("data-val"));
    this.setState({
      index: newIndex,
    });
  };

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
      <SwiperContext.Consumer>
        {swiperContext => (
          <InfoSwiperContext.Consumer>
            {infoContext => (
              <div>
                <ButtonGroup className={classes.nav}>
                  <Button
                    color="secondary"
                    className={classes.button}
                    onClick={swiperContext.resetIndex}
                  >
                    Home
                  </Button>
                  <Button
                    color="secondary"
                    className={classes.button}
                    onClick={infoContext.prevClick}
                  >
                    Prev
                  </Button>
                  <Button
                    color="secondary"
                    className={classes.button}
                    onClick={infoContext.nextClick}
                  >
                    Next
                  </Button>
                  <ButtonDropdown
                    direction="up"
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                    className={classes.button}
                  >
                    <DropdownToggle caret className={classes.button}>
                      Contents
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={swiperContext.resetIndex}>Home</DropdownItem>
                      <DropdownItem divider></DropdownItem>
                      <DropdownItem header>Information</DropdownItem>
                      <DropdownItem data-val={0} onClick={infoContext.contentsClick}>
                        Guide Dog Access Basics
                      </DropdownItem>
                      <DropdownItem data-val={1} onClick={infoContext.contentsClick}>
                        State Legislation
                      </DropdownItem>
                      <DropdownItem data-val={2} onClick={infoContext.contentsClick}>
                        Federal Legislation
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
              </div>
            )}
          </InfoSwiperContext.Consumer>
        )}
      </SwiperContext.Consumer>
    );
  }
}

export default InfoNavBar;
