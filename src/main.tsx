import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const THEME = createTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", sans-serif`,
    fontSize: 20,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
          boxShadow: "2px 2px 8px rgba(0, 0, 0, .4)",
          padding: "1rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: "left",
        },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
