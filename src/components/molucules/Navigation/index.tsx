import React from 'react'
import './index.scss'

import { NavigationItem } from '../../atoms/NavigationItem'

export const Navigation = () => {

  return (<div className='navigation'>
    {['Піцца', 'Ролли', 'Бізнес-ланчі', 'Закуски', 'Десерти', 'Напої'].map( item => <NavigationItem key={item} text={item}></NavigationItem>)}
    </div>
    )
}
