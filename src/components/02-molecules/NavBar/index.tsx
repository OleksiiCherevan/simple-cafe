import React from 'react'
import './index.scss'

import NavItem from '../../01-atoms/NavItem'

const NavBar = () => {

  return (<div className='nav-bar'>
    {['Піцца', 'Ролли', 'Бізнес-ланчі', 'Закуски', 'Десерти', 'Напої'].map( item => <NavItem key={item} text={item}></NavItem>)}
    </div>
    )
}

export default NavBar
