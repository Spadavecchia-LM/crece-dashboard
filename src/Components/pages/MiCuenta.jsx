import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/Context'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ButtonGroup  from '@mui/material/ButtonGroup';
import { Button } from '@mui/material';


const MiCuenta = () => {
    const {state} = useContext(GlobalContext)

    const {user} = state
  return (
<>

<Typography variant="h2" component="h2">
  Mis datos
</Typography>

<Stack>
    <Typography>NOMBRE: {user.nombre}</Typography>
    <Typography>APELLIDO: {user.apellido}</Typography>
    <Typography>EMAIL: {user.email}</Typography>
    <Typography>EDIFICIO: {user.edificio.nombre}</Typography>
   <ButtonGroup>
    <Button variant='contained'>Editar Campos</Button>
    <Button variant='outlined' color='error'>Cambiar Contraseña</Button>

   </ButtonGroup>


</Stack>



</>
  )
}

export default MiCuenta