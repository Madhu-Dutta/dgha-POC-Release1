import React from "react"
import logo from "../images/logo.png"
import classes from "./landing.module.css"
import { Button } from "reactstrap"
import Navbar from "./navbar"

class Landing extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
    }
  }

  handleXIndexChange = event => {
    var xIndex = parseInt(event.target.getAttribute("data-val"))
    this.props.onChangeX(xIndex)
  }

  render() {
    return (
      <div className={classes.slide}>
        <Navbar></Navbar>
        <div className={classes.content}>
          <img src={logo} alt="Logo" className={classes.logo} />
          <hr />
          <h2>Dog Guide Handlers Australia Companion App</h2>
          <br />
          <Button className={classes.landingButton}>
            <a
              className={classes.link}
              href="http://dgha.org.au/dgha/membership/"
            >
              Donate
            </a>
          </Button>
          <br />
          <br />
          <Button className={classes.landingButton}>
            <a className={classes.link} href="http://dgha.org.au/dgha/contact/">
              Contact
            </a>
          </Button>
        </div>
      </div>
    )
  }
}

export default Landing
