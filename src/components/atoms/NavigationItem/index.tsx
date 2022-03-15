import React from 'react'
import './index.scss'

type Link = {
  text: string,
  url?: string
}

export const NavigationItem= ({text='nav-item', url} : Link ) => {
return (
    <div className='navigation-item'>{text}</div>
  )
}
