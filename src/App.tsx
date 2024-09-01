import { Header } from "./components/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { navItems } from "./config";
import { NavItemType } from "./type";
import { ReactNode } from "react";
import { Box, Container, Divider } from "@mui/material";

import logo from "./assets/result.png";
import { TextCard } from "./components/TextCard";

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
    <Box display="flex" flexDirection="column">
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
      <Box
        sx={{
          marginTop: "auto",
          width: "100%",
          padding: 4,
        }}
      >
        <Box
          component="img"
          sx={{
            height: "auto",
            width: "auto",
            float: "left",
            my: "auto",
          }}
          alt={"logo"}
          src={logo}
        />
        <Box
          sx={{ display: "flex", flexDirection: "column", padding: 4, gap: 1 }}
        >
          <TextCard small title={"Юридична адреса:"}>
            Волинська Область, місто Луцьк, вул. Героїв Упа 2г
          </TextCard>
          <TextCard small title={"Адреса виробництва:"}>
            Волинська Область, Рожищенський район, село Носачевичі
          </TextCard>
          <TextCard small title={"e-mail:"}>
            <a href="mailto:volynteplo@gmail.com">volynteplo@gmail.com</a>
          </TextCard>
          <TextCard small title={"тел.:"}>
            <a href="tel:+380673325192">+38 067 332 51 92</a>
          </TextCard>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
