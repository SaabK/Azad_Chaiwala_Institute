import { ButtonPropsType } from "../types";
import { motion } from "framer-motion"

function SecondaryButton({ text }: ButtonPropsType) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="btn border-2 border-yellow !text-white">
      {text}
    </motion.button>
  )
}

export default SecondaryButton;