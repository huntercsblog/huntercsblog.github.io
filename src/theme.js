import deepMerge from "deepmerge";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import "fontsource-montserrat/700.css"
import "fontsource-exo-2/400.css";

/*
 * Current theme:
 * --dark-gray: #303030;
 * --ksu-purple: #602690;
 * --lavender-floral: #b873f0;
 * --mauve: #d4affa;
 * --platinum: #ebeaeb;
 */

const makeTheme = (variant) => {
  const heading = {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
  };
  const common = {
    typography: {
      fontFamily: '"Exo 2", Roboto, sans-serif',
      fontWeight: 400,
      fontSize: 16,
      h3: heading,
      h4: heading,
    }
  };

  const theme = createMuiTheme(deepMerge(common, variant));
  return responsiveFontSizes(theme);
};

const light = {
  palette: {
    background: {
      default: "#e3e3e3",
      header: "#ebebeb",
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
      header: "3d3d3d",
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
