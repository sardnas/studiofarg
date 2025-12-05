import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import { Menu } from "./components/Menu";
import { Welcome } from "./components/Welcome";
import styled from "styled-components";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgb(255, 0, 0)",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "rgb(4, 255, 0)",
    },
    background: {
      default: "rgb(0, 42, 255)",
    },
    text: {
      primary: "rgb(0, 0, 0)",
      secondary: "rgb(255, 255, 255)",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: "bold",
      fontFamily: "Dongle",
    },
    body1: {
      fontSize: "1rem",
      fontFamily: "Quicksand",
    },
  },
  spacing: 8, // Custom spacing (default is 8px)
});

const GridContainer = styled.div`
  display: grid;
  grid-column-gap: 24px;
  grid-template-columns: repeat(12, [col-start] 1fr);
  padding-top: 16px;
  padding-bottom: 24px;

  @media (max-width: 450px) {
    gap: 16px;
    grid-column-gap: 12px;
  }
`;

const LeftGridContent = styled.div`
  grid-column: col-start 4 / span 2;

  @media (max-width: 450px) {
    grid-column: span 12;
  }
`;
const RightGridContent = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 450px) {
    grid-column: span 12;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={(theme) => ({
          // CSS Custom Properties - automatically synced with MUI theme
          ":root": {
            "--color-primary-main": theme.palette.primary.main,
            "--color-secondary-main": theme.palette.secondary.main,
            "--color-background-default": theme.palette.background.default,
            "--color-text-primary": theme.palette.text.primary,
            "--color-text-secondary": theme.palette.text.secondary,
            "--font-family-heading": theme.typography.h1.fontFamily,
            "--font-family-body": theme.typography.body1.fontFamily,
            "--font-size-h1": theme.typography.h1.fontSize,
            "--font-size-body": theme.typography.body1.fontSize,
            "--spacing-1": theme.spacing(1),
            "--spacing-2": theme.spacing(2),
            "--spacing-3": theme.spacing(3),
            "--spacing-4": theme.spacing(4),
            "--spacing-5": theme.spacing(5),
            "--spacing-6": theme.spacing(6),
          },
          // Global Typography Classes
          ".Typography": {
            color: theme.palette.text.primary,
            fontFamily: theme.typography.body1.fontFamily,
          },
          ".Typography-h1": {
            color: theme.palette.text.primary,
            fontFamily: theme.typography.h1.fontFamily,
            fontSize: theme.typography.h1.fontSize,
            fontWeight: theme.typography.h1.fontWeight,
          },
          ".Typography-body1": {
            color: theme.palette.text.primary,
            fontFamily: theme.typography.body1.fontFamily,
            fontSize: theme.typography.body1.fontSize,
          },
          ".Typography-primary": {
            color: theme.palette.primary.main,
          },
          ".Typography-secondary": {
            color: theme.palette.secondary.main,
          },
          // Background Classes
          ".Background-default": {
            backgroundColor: theme.palette.background.default,
          },
          ".Background-primary": {
            backgroundColor: theme.palette.primary.main,
          },
          // Utility Classes
          ".text-primary": {
            color: theme.palette.primary.main,
          },
          ".text-secondary": {
            color: theme.palette.secondary.main,
          },
          ".bg-primary": {
            backgroundColor: theme.palette.primary.main,
          },
          ".bg-secondary": {
            backgroundColor: theme.palette.secondary.main,
          },
        })}
      />
      <GridContainer>
        <LeftGridContent>
          <Welcome />
        </LeftGridContent>
        <RightGridContent>
          <Menu />
        </RightGridContent>
      </GridContainer>
    </ThemeProvider>
  );
};

export default App;
