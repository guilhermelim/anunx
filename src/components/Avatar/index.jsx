import { Avatar } from '@mui/material'
import React from 'react'

const index = ({ name, image }) => {

  const getInitialsFromName = (nameString) => {
    const fullName = nameString.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    return initials.toUpperCase();
  }

  return (
    <Avatar
      alt={name}
      src={image}
    >
      {getInitialsFromName(name)}
    </Avatar>
  )
}

export default index