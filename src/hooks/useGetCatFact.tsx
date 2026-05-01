import { useState } from 'react'
import type { catFactType } from '../types/types'

const useGetCatFact = () => {
  const CAT_API_ENDPOINT = `${import.meta.env.VITE_CAT_API_ENDPOINT}`
  const [getCatFact, setGetCatFact] = useState<catFactType | null>(null)

  const fetchCatFact = async():Promise<void> => {
    try {
    const response:Response = await fetch(CAT_API_ENDPOINT)
    const data = await response.json()
    const catData:catFactType = {
      fact: data.fact,
    }
    setGetCatFact(catData)
    } catch(error) {
      console.log('Could not fetch cat data', error)
    }
  }
  return {getCatFact, fetchCatFact, setGetCatFact}
}

export default useGetCatFact