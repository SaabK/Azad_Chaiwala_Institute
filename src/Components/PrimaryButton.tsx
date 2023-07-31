import { ButtonPropsType } from "../types";
import { motion } from "framer-motion"

function PrimaryButton({ text, className, onClick }: ButtonPropsType) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`btn bg-yellow ${className}`}
      onClick={onClick}
    >
      {text}
    </motion.button>
  )
}

export default PrimaryButton;