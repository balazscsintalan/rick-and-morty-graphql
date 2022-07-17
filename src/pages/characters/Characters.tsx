import * as React from 'react';
import CharacterCard from './character-card/CharacterCard';
import useCharacters from '../../query/characters/useCharacters';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/spinner/Spinner';

const Characters: React.FC = () => {
  const [name, setName] = React.useState<string>();
  const [filterName, setFilterName] = React.useState<string>();
  const [page, setPage] = React.useState(1);

  const { data, loading } = useCharacters({
    filter: {
      name: filterName,
    },
    page,
  });

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilterName(name);
      setPage(1);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [name, setFilterName]);

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="bg-gray-800 flex-1">
      <div className="flex justify-center m-2 mt-4">
        <input
          value={name}
          onChange={changeName}
          type="text"
          placeholder="Search for name"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex justify-center items-center flex-wrap p-2">
            {data?.characters.results.map((it) => (
              <CharacterCard key={it.id} character={it} />
            ))}
          </div>
          <Pagination
            currentPage={page}
            numberOfPages={data?.characters.info.pages ?? 1}
            next={() => setPage((old) => old + 1)}
            previous={() => setPage((old) => old - 1)}
          />
        </>
      )}
    </div>
  );
};

export default Characters;
