import React, { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header: React.FC = () => {
  const [anchorElPosluhe, setAnchorElPosluhe] = useState<null | HTMLElement>(
    null,
  );
  const [anchorElAltFuel, setAnchorElAltFuel] = useState<null | HTMLElement>(
    null,
  );
  const [anchorElEquipment, setAnchorElEquipment] =
    useState<null | HTMLElement>(null);

  // Handlers for opening and closing menus
  const handleMenuOpen = (
    event: MouseEvent<HTMLElement>,
    setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (
    setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>,
  ) => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>

        {/* About Us Button */}
        <Button color="inherit">About Us</Button>

        {/* Posluhe Button with Dropdown */}
        <div
          onMouseEnter={(event) => handleMenuOpen(event, setAnchorElPosluhe)}
          onMouseLeave={() => handleMenuClose(setAnchorElPosluhe)}
        >
          <Button color="inherit">Posluhe</Button>
          <Menu
            anchorEl={anchorElPosluhe}
            open={Boolean(anchorElPosluhe)}
            onClose={() => handleMenuClose(setAnchorElPosluhe)}
            MenuListProps={{
              onMouseEnter: (event) =>
                handleMenuOpen(event, setAnchorElPosluhe),
              onMouseLeave: () => handleMenuClose(setAnchorElPosluhe),
            }}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElPosluhe)}>
              Option 1
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElPosluhe)}>
              Option 2
            </MenuItem>
          </Menu>
        </div>

        {/* Alternative Fuel Button with Dropdown */}
        <div
          onMouseEnter={(event) => handleMenuOpen(event, setAnchorElAltFuel)}
          onMouseLeave={() => handleMenuClose(setAnchorElAltFuel)}
        >
          <Button color="inherit">Alternative Fuel</Button>
          <Menu
            anchorEl={anchorElAltFuel}
            open={Boolean(anchorElAltFuel)}
            onClose={() => handleMenuClose(setAnchorElAltFuel)}
            MenuListProps={{
              onMouseEnter: (event) =>
                handleMenuOpen(event, setAnchorElAltFuel),
              onMouseLeave: () => handleMenuClose(setAnchorElAltFuel),
            }}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElAltFuel)}>
              Option 1
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElAltFuel)}>
              Option 2
            </MenuItem>
          </Menu>
        </div>

        {/* Equipment Button with Dropdown */}
        <div
          onMouseEnter={(event) => handleMenuOpen(event, setAnchorElEquipment)}
          onMouseLeave={() => handleMenuClose(setAnchorElEquipment)}
        >
          <Button color="inherit">Equipment</Button>
          <Menu
            anchorEl={anchorElEquipment}
            open={Boolean(anchorElEquipment)}
            onClose={() => handleMenuClose(setAnchorElEquipment)}
            MenuListProps={{
              onMouseEnter: (event) =>
                handleMenuOpen(event, setAnchorElEquipment),
              onMouseLeave: () => handleMenuClose(setAnchorElEquipment),
            }}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElEquipment)}>
              Option 1
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElEquipment)}>
              Option 2
            </MenuItem>
          </Menu>
        </div>

        {/* Contacts Button */}
        <Button color="inherit">Contacts</Button>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
