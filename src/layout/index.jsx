import React from "react";
import Layout from "./Layout";
import themes from "src/theme";
import useLocalStorage from "src/hooks/useLocalStorage";
import { ThemeProvider } from "@material-ui/styles";

// Index for general page layout
const Index = ({ children, container = false }) => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () =>
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));

  return (
    <ThemeProvider theme={themes[theme]}>
      <Layout content={children} toggleTheme={toggleTheme} themeType={theme} />
    </ThemeProvider>
  );
};

export default Index;
