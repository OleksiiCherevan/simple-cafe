import React from 'react'
import './index.scss'

const title = 'Доставка свежей и горячей еды в течение  40 минут'

const Header1 = (props) => {
  const {text = title} = props
  return (
    <div className='header1'>{text}</div>
  )
}

export default Header1 
