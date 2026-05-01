import useGetCatFact from "../../hooks/useGetCatFact"
import useGetDogFact from '../../hooks/useGetDogFact'
import useGetUselessFact from '../../hooks/useGetUselessFact'
import Button from "../Button"
import type { ButtonType } from '../Button/types'
import catIcon from '../../assets/cat.png'
import dogIcon from '../../assets/dog.png'
import factIcon from '../../assets/fact.png'
import resetIcon from '../../assets/reset.png'
import { motion } from "motion/react"

const ConsoleBody = () => {

  const {getCatFact, fetchCatFact, setGetCatFact} = useGetCatFact()
  const {getDogFact, fetchDogFact, setGetDogFact} = useGetDogFact()
  const {getUselessFact, fetchUselessFact, setGetUselessFact} = useGetUselessFact()
  const buttonItems:ButtonType[] = [
 {
   name: 'Cat',
   icon: catIcon,
   click: () => {
    fetchCatFact()
    setGetDogFact(null)
    setGetUselessFact(null)
  }
 },
 {
   name: 'Dog',
   icon: dogIcon,
   click: () => {
    fetchDogFact()
    setGetCatFact(null)
    setGetUselessFact(null)
  }
 },
 {
   name: '?',
   icon: factIcon,
   click: () => {
    fetchUselessFact()
    setGetCatFact(null)
    setGetDogFact(null)
  },
 },
{
   name: 'Reset',
   icon: resetIcon,
   click: () => {
    setGetUselessFact(null)
    setGetCatFact(null)
    setGetDogFact(null)
  },
 }
]

  return (
    <div className="w-1/2 flex items-center justify-center">
      <motion.div className="bg-secondary h-150 w-150 grid rounded-3xl shadow-(--console-shadow) inset-shadow-md" initial={{ y: -1000 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ease: 'easeOut', duration: 0.9 }}
        >
        <div className="bg-display h-80 w-130 place-self-center  col-span-3 row-span-2 shadow-(--display-shadow) font-ternary text-xl overflow-auto p-6">{getCatFact?.fact ?? getDogFact?.fact ?? getUselessFact?.fact}</div>
        <div className="bg-none col-span-3 flex justify-around align-center rounded-3xl p-6">
          {buttonItems && buttonItems.map((item, index) => <Button key={index} name={item.name} click={item.click} icon={item.icon}/>)}
        </div>
      </motion.div>
    </div>
  )
}

export default ConsoleBody