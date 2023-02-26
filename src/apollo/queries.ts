import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        image
      }
      info {
        next
        count
        pages
      }
    }
  }
`;

export const GET_CHARACTER_DETAILS = gql`
  query getCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      gender
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;
