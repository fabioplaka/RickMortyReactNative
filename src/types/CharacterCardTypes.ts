export type CharacterCardTypes = {
  onPress: (id: Character) => void;
  character: Character;
};

export type Character = {
  id: string;
  name: string;
  image: string;
};
