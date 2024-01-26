"use client"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0, x: 200 }
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="leave"
      transition={{ type: "linear" }}
    >
      {children}
      {/* <motion.div  ></motion.div> */}
    </motion.main>
  )
}