import * as React from 'react';
import StatusIndicator from './StatusIndicator';
import { Character } from '../../../query/characters/useCharacters';

interface ICharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<ICharacterCardProps> = ({ character }) => {
  return (
    <article
      className="bg-gray-600 rounded-xl flex prose-lg
                sm:flex-row sm:w-128 sm:h-56 sm:mx-2
                flex-col w-full my-2
                prose-p:m-0 prose-p:text-white
                prose-h4:m-0 prose-h4:text-gray-300 prose-h4:font-bold"
    >
      <div className="basis-2/5">
        <img
          className="object-center object-cover h-full w-fill transition-opacity opacity-100 m-0 w-full
                    sm:rounded-none sm:rounded-l-xl sm:h-full sm:max-h-full
                    rounded-t-xl h-72"
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className="basis-3/5 p-3 flex flex-col justify-center">
        <h2 className="m-0 text-white font-bold">{character.name}</h2>
        <h5 className="m-0 text-white">
          <StatusIndicator status={character.status} /> - {character.species}
        </h5>
        <h4>Origin:</h4>
        <p>{character.origin.name}</p>
        <h4>Last known location:</h4>
        <p>{character.location.name}</p>
      </div>
    </article>
  );
};

export default CharacterCard;
