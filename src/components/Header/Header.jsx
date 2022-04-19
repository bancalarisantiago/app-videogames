//Libraries, Hooks
import React from 'react'
import {Link} from 'react-router-dom'

//Styles
import { Wrapper } from './Header.styles.js'

//Images
import img from '../../images/pngfind.com-video-game-controller-png-70884.png'

const Header = () => (
        <Wrapper>
            <Link to='/'><img src={img} alt='logo gaming'/></Link> 
        </Wrapper>
)

export default Header