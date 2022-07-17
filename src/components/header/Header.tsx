import React from 'react';
import RickAndMortyIcon from './RickAndMortyIcon';

const Header: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <a className="btn btn-ghost normal-case text-xl" href="/">
        <RickAndMortyIcon className="mr-1" />
        Rick And Morty
      </a>
    </div>
  );
};

export default Header;
