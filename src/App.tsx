import './index.css'
import ConsoleBody from './components/ConsoleBody'
import Footer from './components/Footer'
import { motion } from "motion/react"
import { ContentHeader, ContentParagraph } from './data/data'

function App() {
  return (
    <div className="flex flex-col h-full justify-between bg-primary">
      <div className="flex grow">
        <motion.h1 className="mb-2 text-6xl font-primary pt-8 pl-4 w-1/3 text-shadow-sm"
        initial={{ opacity: 0.1, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}>{ContentHeader}</motion.h1>
        <ConsoleBody />
        <motion.div className="text-xl mt-8 font-secondary flex items-end pl-8 pb-16 w-1/3 tracking-[.7rem]"
        initial={{ opacity: 0.1, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}>{ContentParagraph}</motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default App