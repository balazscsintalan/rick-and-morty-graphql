import React from 'react';
import { Link } from 'react-router-dom';
import RickAndMortyIcon from './RickAndMortyIcon';

const Header: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <Link className="btn btn-ghost normal-case text-xl" to="/">
        <RickAndMortyIcon className="mr-1" />
        Rick And Morty
      </Link>
    </div>
  );
};

export default Header;
