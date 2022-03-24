import React from 'react'
import './index.scss'

const title = 'HEADER 2'

const Header2 = (props) => {
  const {text = title} = props
  return (
    <div className='header2'>{text}</div>
  )
}

export default Header2
