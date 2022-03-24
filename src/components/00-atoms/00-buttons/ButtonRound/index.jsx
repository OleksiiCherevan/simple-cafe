import React from 'react'
import './index.scss'

const ButtonRound = (props) => {
  const {image, url} = props;

  return (
    <a className='button-round' href={url}>
      <div className='button-round__image'>
        {image}
      </div>
    </a>
  )
}

export default ButtonRound
