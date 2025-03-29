import '@/styles/Nav.css'

import React from 'react';
import Search from '@/components/Search'
import { Supplier } from './ListSuppliers';

interface NavProps {
  onSearch: (results: Supplier[]) => void;
}

const Nav: React.FC<NavProps> = ({ onSearch }) => {
  return (
    <nav className='nav'>
      <div className='nav-profile'>
        <h1>Bienvenido</h1>
      </div>
      <Search onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;