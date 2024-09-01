import React, { useMemo, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
} from "@mui/material";
import CustomizedMenus from "../ButtonWithPopover/ButtonWithPopover.tsx";
import { navItems } from "../../config";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navItemsComp = useMemo(() => {
    return Object.entries(navItems).map(([key, { title, child }]) => (
      <CustomizedMenus
        item={title}
        key={key}
        menuItem={child}
        path={key}
        onClick={() => setOpen(false)}
      />
    ));
  }, []);

  return (
    <Container sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ justifyContent: { xs: "space-between", lg: "center" } }}>
          <IconButton
            onClick={() => setOpen((o) => !o)}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Волиньтепло
          </Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ margin: "1rem", display: { xs: "none", lg: "block" } }}
          />
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
            }}
          >
            {navItemsComp}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "lightblue",
            padding: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          },
        }}
      >
        {navItemsComp}
      </Drawer>
    </Container>
  );
};
