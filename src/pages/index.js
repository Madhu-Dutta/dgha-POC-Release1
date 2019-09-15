import React from "react"
import Swiper from "./swiper"
import "bootstrap/dist/css/bootstrap.min.css"
import { LanguageContext } from "../contexts/LanguageContext"

class indexPage extends React.Component {
  constructor(props) {
    super(props);

    this.changeLang = (newLang) => {
      this.setState(state => ({
        currentLang: newLang,
      }));
    }

    this.state = {
      currentLang: "en",
      defaultLang: "en",
      onChangeLang: this.changeLang,
    }
  }
  render() {
    return (
      <LanguageContext.Provider value={this.state}>
        <Swiper/>
      </LanguageContext.Provider>
    );
  }
}

export default indexPage;
