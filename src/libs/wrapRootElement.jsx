import React from "react";
import "fontsource-roboto";
import "fontsource-roboto/700.css";
import "fontsource-roboto-slab";
import { ThemeProvider } from "@material-ui/styles";

import themes from "../theme";

const wrapRootElement = ({ element }) => {
  function getTheme() {
    const isServer = typeof window === "undefined";

    // default theme value
    let theme = "dark";

    if (!isServer) {
      try {
        const json = window.localStorage.getItem("theme");
        const item = JSON.parse(json);
        if (["light", "dark"].includes(item)) {
          theme = item;
        }
      } catch (error) {
        console.log(error);
      }
    }

    return themes[theme];
  }

  return (
    <ThemeProvider theme={getTheme()}>
      {element}
    </ThemeProvider>
  );
};

export default wrapRootElement;

