import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import NotificacionWidget from "./NotificacionWidget";
import { Link } from "react-router-dom";
import { Title } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function Dashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      height={"5vw"}
      padding={"20px 30px"}
    >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}><Link to={"/"}>Comunicados</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={"/archivos"}>Archivos</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={"/miCuenta"}>Mi Cuenta</Link></MenuItem>
      </Menu>
      <NotificacionWidget />
    </Stack>
  );
}
