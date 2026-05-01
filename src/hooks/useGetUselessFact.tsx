import { useState } from 'react'
import type { uselessFactType } from '../types/types'

const useGetUselessFact = () => {
  const FACT_API_ENDPOINT = `${import.meta.env.VITE_FACT_API_ENDPOINT}`
  const [getUselessFact, setGetUselessFact] = useState<uselessFactType | null>(null)

  const fetchUselessFact = async():Promise<void> => {
    try {
    const response:Response = await fetch(FACT_API_ENDPOINT)
    const data = await response.json()
    const uselessFactData:uselessFactType = {
      fact: data.text,
    }
    setGetUselessFact(uselessFactData)
    } catch(error) {
      console.log('Could not fetch useless fact data', error)
    }
  }
  return {getUselessFact, fetchUselessFact, setGetUselessFact}
}

export default useGetUselessFact