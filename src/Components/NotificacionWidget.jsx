import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const NotificacionWidget = () => {
  return (
    <Badge badgeContent={4} color="primary">
    <MailIcon color="action" />
  </Badge>
  )
}

export default NotificacionWidget