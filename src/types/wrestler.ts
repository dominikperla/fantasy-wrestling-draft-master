export interface Wrestler {
  id: string;
  name: string;
  promotion: "WWE" | "AEW" | "NJPW" | "TNA";
  isChampion?: boolean;
  championships?: string[];
  image?: string;
}

export interface DraftState {
  availableWrestlers: Wrestler[];
  draftedWrestlers: Wrestler[];
}