import React from 'react'

const SideLinks = ({ name, Icon }) => {
  return (
    <li className={name}>
      <a href="#">
        <Icon />
      </a>
    </li>
  )
}

export default SideLinks