import '@/styles/Nav.css'

import React from 'react';
import Search from '@/components/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Supplier } from './ListSuppliers';
// import Image from "next/image";

interface NavProps {
  onSearch: (results: Supplier[]) => void;
}

const Nav: React.FC<NavProps> = ({ onSearch }) => {
  return (
    <nav className='nav'>
      <div className='nav-profile'>
        <h1>Hi there</h1>
        <figure>
          <FontAwesomeIcon icon={faUser} />

          {/* <Image src="" alt="Example" width={400} height={400} /> */}
        </figure>
      </div>
      <Search onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;