import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavItemType } from "../../type";
import { Box, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function CustomizedMenus({
  item,
  menuItem,
  onClick,
  path = "/",
}: {
  item: string;
  path?: string;
  menuItem?: Record<string, NavItemType>;
  onClick?: () => void;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!menuItem) {
      navigate(`/${path}`);
      onClick?.();
      console.log(`/${path}`);
    }
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    onClick?.();
  };

  return (
    <Box>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={menuItem ? <KeyboardArrowDownIcon /> : undefined}
      >
        {item}
      </Button>
      {menuItem ? (
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {Object.entries(menuItem)?.map(([key, { title, child }]) =>
            child ? (
              <MenuItem>
                {Object.entries(child).map(([key, value]) => {
                  return (
                    <CustomizedMenus
                      key={key}
                      menuItem={{ [key]: value }}
                      item={value.title}
                      path={`${path}/${key}`}
                    />
                  );
                })}
              </MenuItem>
            ) : (
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate(`/${path}/${key}`);
                }}
                disableRipple
                key={key}
              >
                {title}
              </MenuItem>
            ),
          )}
        </StyledMenu>
      ) : null}
    </Box>
  );
}
