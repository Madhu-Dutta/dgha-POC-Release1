import * as React from "react"

export const LanguageContext = React.createContext({
  currentLang: "en",
  defaultLang: "en",
  onChangeLang: () => {},
});
