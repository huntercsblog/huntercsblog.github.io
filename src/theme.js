import deepMerge from "deepmerge";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

/*
 * Current theme:
 * --dark-gray: #303030;
 * --ksu-purple: #602690;
 * --lavender-floral: #b873f0;
 * --mauve: #d4affa;
 * --platinum: #ebeaeb;
 */

const makeTheme = (variant) => {
  const common = {};

  const theme = createMuiTheme(deepMerge(common, variant));
  return responsiveFontSizes(theme);
};

const light = {
  palette: {
    background: {
      default: "#ebeaeb",
      paper: "#fff",
    },
    text: {
      primary: "#303030",
      secondary: "#b873f0",
    },
    secondary: {
      main: "#b873f0",
    },
  },
};

const dark = {
  palette: {
    background: {
      default: "#303030",
      paper: "#424242",
    },
    text: {
      primary: "#ebeaeb",
      secondary: "#d4affa",
    },
    secondary: {
      main: "#d4affa",
    },
  },
};

const themes = {
  light: makeTheme(light),
  dark: makeTheme(dark),
};

export default themes;
