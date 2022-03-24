import React from 'react'
import './index.scss'

const title = 'Доставка свіжої та гарячої їжі протягом 40 хвилин'

const Header1 = (props) => {
  const {text = title} = props
  return (
    <div className='header1'>{text}</div>
  )
}

export default Header1 
