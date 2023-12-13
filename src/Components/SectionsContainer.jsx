import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const SectionsContainer = () => {



  return (
    <Stack gap={5}>
<Typography variant="h2" component="h2">
  PANEL DE USUARIO
</Typography>
<ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{justifyContent:"center", flexWrap:"wrap", gap:"20px", padding:"20px 0", backgroundColor:"transparent", border:"none", boxShadow:"none"}}>
    <Link to={"/expensas"}><Button>EXPENSAS</Button></Link>
    <Link to={"/reglamentos"}><Button>REGLAMENTOS</Button></Link>
    <Link to={"/proveedores"}><Button>PROVEEDORES</Button></Link>
    <Link to={"/notificaciones"}><Button>NOTIFICACIONES</Button></Link>
  </ButtonGroup>
    </Stack>

  )
}

export default SectionsContainer