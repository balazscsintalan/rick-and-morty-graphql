import { useQuery, gql, QueryResult } from '@apollo/client';

const GET_CHARACTERS = gql`
  query Characters($filter: FilterCharacter) {
    characters(filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
        status
        location {
          name
        }
        image
        origin {
          name
        }
      }
    }
  }
`;

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export interface Character {
  id: number;
  name: string;
  species: string;
  status: Status;
  location: {
    name: string;
  };
  image: string;
  origin: {
    name: string;
  };
}

interface Info {
  count: number;
  pages: number;
  next: number;
  prev: number;
}

interface CharacterData {
  characters: {
    info: Info;
    results: Character[];
  };
}

interface CharacterVars {
  filter: {
    name: string | undefined;
  };
}

const useCharacters = (
  vars: CharacterVars
): QueryResult<CharacterData, CharacterVars> => {
  return useQuery<CharacterData, CharacterVars>(GET_CHARACTERS, {
    variables: vars,
  });
};

export default useCharacters;
