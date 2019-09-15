import React from "react"
import classes from "./navbar.module.css"
import {
  Button,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

import TRANSLATE_LANGS from "../translate-langs"
import { LanguageContext } from "../contexts/LanguageContext"
import { SwiperContext } from "../contexts/SwiperContext"
import { InfoSwiperContext } from "../contexts/InfoSwiperContext"

const navStyle = {
  position: "fixed",
  width: "100%",
  global: "true",
  // height: "100%", // this property is preventing the donate and contact buttons from working
}

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      contentsDropdownOpen: false,
      languageDropdownOpen: false,
    }
  }

  toggleContentsDropdown = () => {
    this.setState({
      contentsDropdownOpen: !this.state.contentsDropdownOpen,
    })
  }

  toggleLanguageDropdown = () =>
    this.setState({ languageDropdownOpen: !this.state.languageDropdownOpen })

  handleXIndexChange = event => {
    var xIndex = parseInt(event.target.getAttribute("data-val"))
    this.props.onChangeX(xIndex)
  }

  render() {
    return (
      <div style={navStyle}>
        <ButtonGroup className={classes.nav}>
          <ButtonDropdown
            direction="down"
            isOpen={this.state.languageDropdownOpen}
            toggle={this.toggleLanguageDropdown}
            className={classes.navButton}
          >
            <DropdownToggle caret className={classes.navButton}>
              Language
            </DropdownToggle>
            <LanguageContext.Consumer>
              {context => (
                <DropdownMenu>
                  {Object.keys(TRANSLATE_LANGS).map(langCode => (
                    <DropdownItem
                      active={langCode === context.currentLang}
                      onClick={() => context.onChangeLang(langCode)}
                    >
                      {TRANSLATE_LANGS[langCode]}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </LanguageContext.Consumer>
          </ButtonDropdown>

          <SwiperContext.Consumer>
            {swiperContext => (
              <Button className={classes.navButton} onClick={swiperContext.increaseIndex}>
                Access Info
              </Button>
            )}
          </SwiperContext.Consumer>


          <ButtonDropdown
            direction="down"
            isOpen={this.state.contentsDropdownOpen}
            toggle={this.toggleContentsDropdown}
            className={classes.navButton}
          >
            <DropdownToggle caret className={classes.navButton}>
              Contents
            </DropdownToggle>
            <SwiperContext.Consumer>
              {swiperContext => (
                <InfoSwiperContext.Consumer>
                  {infoContext => (
                    <DropdownMenu>
                      <DropdownItem onClick={swiperContext.resetIndex}>Home</DropdownItem>
                      <DropdownItem divider></DropdownItem>
                      <DropdownItem header>Information</DropdownItem>
                      <DropdownItem data-val={0} onClick={(event) => {
                        infoContext.contentsClick(event);
                        swiperContext.increaseIndex();
                      }}>
                        Guide Dog Access Basics
                      </DropdownItem>
                      <DropdownItem data-val={1} onClick={(event) => {
                        infoContext.contentsClick(event);
                        swiperContext.increaseIndex();
                      }}>
                        State Legislation
                      </DropdownItem>
                      <DropdownItem data-val={2} onClick={(event) => {
                        infoContext.contentsClick(event);
                        swiperContext.increaseIndex();
                      }}>
                        Federal Legislation
                      </DropdownItem>
                    </DropdownMenu>
                  )}
                </InfoSwiperContext.Consumer>
              )}
            </SwiperContext.Consumer>
          </ButtonDropdown>
        </ButtonGroup>
      </div>
    )
  }
}

export default Navbar
