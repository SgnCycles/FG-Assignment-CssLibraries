export type catFactType = {
  fact: string,
}

export type dogFactType = {
  fact: string,
}

export type uselessFactType = {
  fact: string,
}

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