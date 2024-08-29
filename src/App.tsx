import "./App.css";
import { Header } from "./components/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { navItems } from "./config";
import { NavItemType } from "./type";
import { ReactNode } from "react";

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
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route index element={<AboutUs />} />
          {renderNavItemsToRoutes(navItems)}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
