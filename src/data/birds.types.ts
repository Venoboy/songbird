export type birdSpeciesType = string[];

export interface IBirdData {
  id: number;
  name: string;
  species: string;
  description: string;
  image: string;
  audio: string;
}

export type IBirdsData = IBirdData[][]
