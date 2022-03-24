import React from 'react'
import './index.scss'

type Link = {
  text: string,
  url?: string
}

const ItemNavigation = ({text='item-navigation', url} : Link ) => {
return (
    <div className='item-navigation'>{text}</div>
  )
}

export default ItemNavigation
