import { Wrestler } from "../types/wrestler";

export const wrestlers: Wrestler[] = [
  // TNA Champions
  {
    id: "lee-tna",
    name: "Lee",
    promotion: "TNA",
    isChampion: true,
    championships: ["TNA World Heavyweight Champion"],
    image: "/placeholder.svg"
  },
  {
    id: "chris-mantaro-tna",
    name: "Chris Mantaro",
    promotion: "TNA",
    isChampion: true,
    championships: ["TNA World Heavyweight Champion"],
    image: "/placeholder.svg"
  },
  // WWE Roster (Sample)
  {
    id: "roman-reigns",
    name: "Roman Reigns",
    promotion: "WWE",
    image: "/placeholder.svg"
  },
  {
    id: "seth-rollins",
    name: "Seth Rollins",
    promotion: "WWE",
    image: "/placeholder.svg"
  },
  // AEW Roster (Sample)
  {
    id: "mjf",
    name: "MJF",
    promotion: "AEW",
    image: "/placeholder.svg"
  },
  {
    id: "kenny-omega",
    name: "Kenny Omega",
    promotion: "AEW",
    image: "/placeholder.svg"
  },
  // NJPW Roster (Sample)
  {
    id: "kazuchika-okada",
    name: "Kazuchika Okada",
    promotion: "NJPW",
    image: "/placeholder.svg"
  },
  {
    id: "will-ospreay",
    name: "Will Ospreay",
    promotion: "NJPW",
    image: "/placeholder.svg"
  },
];