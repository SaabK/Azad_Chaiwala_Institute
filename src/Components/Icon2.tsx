import { motion } from "framer-motion";
import { Icon2PropsType } from "../types";


function Icon2({ href, src, classNames }: Icon2PropsType) {
  return (
    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href={href}>
      <img src={src} className={`w-8 h-8 ${classNames}`} />
    </motion.a>
  )
}

export default Icon2;