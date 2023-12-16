import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import  Avatar  from '@mui/material/Avatar';
import { GlobalContext } from '../Context/Context';
import { Link } from 'react-router-dom';

export default function UserSettings() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {state} = React.useContext(GlobalContext)


  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ bgcolor: "pink" }}>{Object.keys(state.user).length === 0 ? "" : state.user.nombre.substring(0,1)}</Avatar>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to={"/micuenta"}>Mi Cuenta</Link></MenuItem>
        <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
      </Menu>
    </div>
  );
}