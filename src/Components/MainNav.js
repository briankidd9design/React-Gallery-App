import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = props => {
    const handleClick = e => {
        props.handleClick(e.target.textContent);
    };

    return (
        <nav className="main-nav">
            <ul>
                <li onClick={handleClick}><NavLink to='/search/cats'>Cats</NavLink></li>
                <li onClick={handleClick}><NavLink to='/search/dogs'>Dogs</NavLink></li>
                <li onClick={handleClick}><NavLink to='/search/computers'>Computers</NavLink></li>
            </ul>
        </nav>
    )
};

export default MainNav;