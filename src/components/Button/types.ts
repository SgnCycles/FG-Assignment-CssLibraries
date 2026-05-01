import type { catFactType, dogFactType, uselessFactType } from "../../types/types"

export type ButtonType = {
  name: string,
  icon: string,
  click: () => void
}
export type ButtonActivityProps = {
  fetchCatFact: () => void
  fetchDogFact: () => void
  fetchUselessFact: () => void
  getCatFact: catFactType | null
  getDogFact: dogFactType | null
  getUselessFact: uselessFactType | null
}