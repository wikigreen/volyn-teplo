import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, CssBaseline, Divider, IconButton } from "@mui/material";
import CustomizedMenus from "../ButtonWithPopover/ButtonWithPopover.tsx";
import { navItems } from "../../config";

export const Header: React.FC = () => {
  return (
    <Container sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ justifyContent: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Волиньтепло
          </Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ margin: "1rem" }}
          />
          {Object.entries(navItems).map(([key, { title, child }]) => (
            <CustomizedMenus
              item={title}
              key={key}
              menuItem={child}
              path={key}
            />
          ))}
        </Toolbar>
      </AppBar>
    </Container>
  );
};
