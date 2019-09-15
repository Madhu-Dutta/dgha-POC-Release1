import * as React from "react"

export const InfoSwiperContext = React.createContext({
  index: 0,
  resetIndex: () => {},
  increaseIndex: () => {},
  handleChangeIndex: () => {},
  prevClick: () => {},
  nextClick: () => {},
  contentsClick: () => {},
});
