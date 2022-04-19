//Libraries, Hooks
import React from 'react'
import { NavLink } from 'react-router-dom'

//Styles
import style from './Nav.module.css'

const Nav = () => (
            <div className={style.container}>
                    <NavLink className={style.link} to='/'>Landing&nbsp;|</NavLink>
                    <NavLink className={style.link} to='/home'>Home&nbsp;|</NavLink>
                    <NavLink className={style.link} to='/createvg'>Create Game&nbsp; </NavLink>
            </div>
)

export default Nav