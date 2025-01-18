export interface Wrestler {
  id: string;
  name: string;
  promotion?: string;
  isChampion?: boolean;
  championships?: string[];
  image?: string;
}

export interface DraftState {
  availableWrestlers: Wrestler[];
  draftedWrestlers: Wrestler[];
}