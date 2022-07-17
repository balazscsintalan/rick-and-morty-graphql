import * as React from 'react';
import CharacterCard from './character-card/CharacterCard';

const Characters: React.FC = () => {
  const [name, setName] = React.useState<string>();

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="bg-gray-800 flex-1">
      <div className="flex justify-center m-2">
        <input
          value={name}
          onChange={changeName}
          type="text"
          placeholder="Search for name"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex justify-center items-center flex-wrap p-2">
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
    </div>
  );
};

export default Characters;
