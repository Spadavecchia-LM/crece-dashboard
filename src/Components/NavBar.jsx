import React from 'react'
import UserSettings from './UserSettings'
import NotificacionWidget from './NotificacionWidget'
import  Stack   from "@mui/material/Stack"
import Typography   from '@mui/material/Typography'

const NavBar = () => {
  return (
    <Stack flexDirection="row" alignItems="center" justifyContent="flex-end" gap={5} sx={{width:"100vw", height:"10vh"}}>
        <Typography>leo@gmail.com</Typography>
        <NotificacionWidget/>
        <UserSettings/>
    </Stack>
  )
}

export default NavBar