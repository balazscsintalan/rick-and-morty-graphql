import * as React from 'react';
import CharacterCard from './character-card/CharacterCard';
import useCharacters from '../../query/characters/useCharacters';

const Characters: React.FC = () => {
  const [name, setName] = React.useState<string>();
  const [filterName, setFilterName] = React.useState<string>();

  const { data, loading } = useCharacters({
    filter: {
      name: filterName,
    },
  });

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilterName(name);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [name, setFilterName]);

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
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div className="flex justify-center items-center flex-wrap p-2">
          {data?.characters.results.map((it) => (
            <CharacterCard key={it.id} character={it} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Characters;
