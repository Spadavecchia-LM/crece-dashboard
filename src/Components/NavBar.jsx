import React, { useContext } from 'react'
import UserSettings from './UserSettings'
import NotificacionWidget from './NotificacionWidget'
import  Stack   from "@mui/material/Stack"
import Typography   from '@mui/material/Typography'
import { GlobalContext } from '../Context/Context'

const NavBar = () => {

  const {state} = useContext(GlobalContext)

  return (
    <Stack flexDirection="row" alignItems="center" justifyContent="flex-end" gap={5} sx={{width:"100vw", height:"10vh"}}>
        <Typography>{state.user.email}</Typography>
        <NotificacionWidget/>
        <UserSettings/>
    </Stack>
  )
}

export default NavBar