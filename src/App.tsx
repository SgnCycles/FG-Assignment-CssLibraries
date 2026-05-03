import './index.css'
import ConsoleBody from './components/ConsoleBody'
import Footer from './components/Footer'
import { motion } from "motion/react"
import { ContentHeader, ContentParagraph } from './data/data'

function App() {
  return (
    <div className="flex flex-col h-full lg:justify-between bg-primary">
      <div className="flex max-md:flex-col md:flex-col md:justify-evenly xl:flex-row grow">
        <motion.h1 className="md:pb-8 mb-2 text-3xl md:text-6xl font-primary pt-4 pb-4 md:pt-8 text-center md:pl-1 md:w-full xl:w-1/3 text-shadow-sm"
        initial={{ opacity: 0.1, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}>{ContentHeader}</motion.h1>
        <ConsoleBody />
        <motion.div className="lg:text-xl lg:mt-8 font-secondary flex lg:items-end pl-8 pb-8 pt-8 lg:pb-16 md:w-full xl:w-1/3 tracking-[.7rem]"
        initial={{ opacity: 0.1, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}>{ContentParagraph}</motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default App