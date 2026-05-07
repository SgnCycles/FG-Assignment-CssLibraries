import useGetCatFact from '../../hooks/useGetCatFact'
import useGetDogFact from '../../hooks/useGetDogFact'
import useGetUselessFact from '../../hooks/useGetUselessFact'
import { motion } from 'motion/react'
import type { ButtonType } from '../../types/types'
import Button from '../Button'
import catIcon from '../../assets/cat.png'
import dogIcon from '../../assets/dog.png'
import factIcon from '../../assets/fact.png'
import resetIcon from '../../assets/reset.png'
import { useSound } from 'react-sounds'

const ConsoleBody = () => {

  const {getCatFact, fetchCatFact, setGetCatFact} = useGetCatFact()
  const {getDogFact, fetchDogFact, setGetDogFact} = useGetDogFact()
  const {getUselessFact, fetchUselessFact, setGetUselessFact} = useGetUselessFact()
 
  const { play } = useSound('ui/button_soft')

  const buttonItems:ButtonType[] = [
 {
   name: 'Cat',
   icon: catIcon,
   click: () => {
    play()
    fetchCatFact()
    setGetDogFact(null)
    setGetUselessFact(null)
  }
 },
 {
   name: 'Dog',
   icon: dogIcon,
   click: () => {
    play()
    fetchDogFact()
    setGetCatFact(null)
    setGetUselessFact(null)
  }
 },
 {
   name: '?',
   icon: factIcon,
   click: () => {
    play()
    fetchUselessFact()
    setGetCatFact(null)
    setGetDogFact(null)
  },
 },
{
   name: 'Reset',
   icon: resetIcon,
   click: () => {
    play()
    setGetUselessFact(null)
    setGetCatFact(null)
    setGetDogFact(null)
  },
 }
]

  return (
    <div className='md:w-full xl:w-1/2 flex items-center justify-center'>
      <motion.div className='bg-secondary h-auto w-[90%] md:h-150 md:w-150 grid rounded-3xl shadow-(--console-shadow) inset-shadow-md'    initial={{ y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeOut', duration: 0.9 }}>
        <div className='bg-display h-100 w-[85%] md:h-80 md:w-130 place-self-center col-span-2 md:col-span-3 row-span-2 shadow-(--display-shadow) font-ternary text-base md:text-xl overflow-auto p-6 mt-6'>{getCatFact?.fact ?? getDogFact?.fact ?? getUselessFact?.fact}</div>
        <div className='bg-none col-span-2 md:col-span-3 flex justify-around align-center rounded-3xl lg:p-8 flex-wrap mt-4 mb-6'>
          {buttonItems && buttonItems.map((item, index) => <Button key={index} name={item.name} click={item.click} icon={item.icon}/>)}
        </div>
      </motion.div>
    </div>
  )
}

export default ConsoleBody