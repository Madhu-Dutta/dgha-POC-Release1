import * as React from "react"

export const SwiperContext = React.createContext({
  index: 0,
  resetIndex: () => {},
  increaseIndex: () => {},
  handleChangeIndex: () => {},
});
