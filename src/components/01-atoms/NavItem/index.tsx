import React from 'react'
import './index.scss'

type Link = {
  text: string,
  url?: string
}

const NavItem= ({text='nav-item', url} : Link ) => {
return (
    <div className='nav-item'>{text}</div>
  )
}

export default NavItem
