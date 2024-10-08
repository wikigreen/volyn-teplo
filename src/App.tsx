import { Header } from "./components/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { navItems } from "./config";
import { NavItemType } from "./type";
import { ReactNode } from "react";
import { Box, Container, Divider } from "@mui/material";

import { Footer } from "./components/Footer";

const renderNavItemsToRoutes = (
  navItems: Record<string, NavItemType>,
  path = "/",
) => {
  return Object.entries(navItems)
    .flatMap(([key, value]): ReactNode[] => {
      if (value.component != null) {
        return [<Route path={`${path}${key}`} element={value.component} />];
      }
      if (value.child) {
        return renderNavItemsToRoutes(value.child, `${path}${key}/`);
      }
      return [];
    })
    .filter((v) => v != null);
};

function App() {
  return (
    <Box display="grid" gridTemplateRows="auto 1fr auto" minHeight="100vh">
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column">
          <HashRouter>
            <Header />
            <Box sx={{ my: "12rem" }}>
              <Routes>
                <Route index element={<AboutUs />} />
                {renderNavItemsToRoutes(navItems)}
              </Routes>
            </Box>
          </HashRouter>
        </Box>
      </Container>
      <Divider />
      <Footer />
    </Box>
  );
}

export default App;
