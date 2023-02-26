export interface CharacterTypes {
  id: string;
  name: string;
  image: string;
  species?: string;
  gender?: string;
  episode?: EpisodeTypes[];
}

export interface EpisodeTypes {
  id?: string;
  name: string;
  air_date: string;
}

export interface CharactersTypes {
  results: CharacterTypes[];
  info: InfoTypes;
}

export interface InfoTypes {
  next: number;
  count: number;
  pages: number;
}

export interface CharactersListTypes {
  characters: CharactersTypes;
}

export interface CharacterDetailsTypes {
  character: CharacterTypes;
}
