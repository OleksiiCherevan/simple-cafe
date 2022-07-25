import React from 'react'
import './index.scss'

import ItemNavigation from '../../../00-atoms/03-items/ItemNavigation'

const BarNavigation = (props) => {
  const {items} = props
  return (<div className='bar-navigation'>
    {items.map( item => <ItemNavigation key={item} text={item}></ItemNavigation>)}
    </div>
    )
}

export default BarNavigation
