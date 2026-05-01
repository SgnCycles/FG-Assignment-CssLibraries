import { useState } from 'react'
import type { dogFactType } from '../types/types'

const useGetDogFact = () => {
  const DOG_API_ENDPOINT = `${import.meta.env.VITE_DOG_API_ENDPOINT}`
  const [getDogFact, setGetDogFact] = useState<dogFactType | null>(null)

  const fetchDogFact = async():Promise<void> => {
    try {
    const response:Response = await fetch(DOG_API_ENDPOINT)
    const data = await response.json()
    const dogData:dogFactType = {
      fact: data.data[0].attributes.body,
    }
    setGetDogFact(dogData)
    } catch(error) {
      console.log('Could not fetch dog data', error)
    }
  }
  return { getDogFact, fetchDogFact, setGetDogFact }
}

export default useGetDogFact