import React from 'react';
import Search from '@/components/Search'
import '@/styles/Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='nav-profile'>
                <h1>Hi there</h1>
                <figure>
                <FontAwesomeIcon icon={faUser} />
                    {/* <img src="" alt="img text" /> */}
                    </figure>
            </div>
            <Search />
        </nav>
    );
};

export default Nav;