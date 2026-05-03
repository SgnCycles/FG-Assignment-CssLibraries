import { motion } from "motion/react"

const Footer = () => {
  return (
    <footer>
      <motion.p className="font-secondary text-base text-center tracking-[.6rem] pb-2 lg:pb-8 pl-2 text-(--footer-text-color) text-shadow-md" initial={{ x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: 'linear', duration: 0.9 }}>&copy;SgnCycles</motion.p>
    </footer>
  )
}

export default Footer