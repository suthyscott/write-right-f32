import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <NavLink to='/'>Auth</NavLink>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/add'>Add</NavLink>
    </div>
  )
}

export default Header