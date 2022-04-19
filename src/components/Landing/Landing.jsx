//Libraries, Hooks
import React from 'react';
import { Link } from 'react-router-dom'

//Styles
import style from './Landing.module.css'

const Landing = () => {

return (
    <div className={style.container}>
        <Link className={style.link} to='/home'>
            <span className={style.parpadea}>Insert coin's</span>
        </Link>
    </div>
)

}

export default Landing