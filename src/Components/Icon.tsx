import { IconPropsType } from "../types";
import { motion } from 'framer-motion';

function Icon({ icon, followers, href }: IconPropsType) {
  return (
    <a href={href} target="_blank" className="flex flex-col items-center gap-2 ">
      <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={icon} alt="facebook" className="w-12 cursor-pointer" />
      <span className="font-bold text-[10px] lg:text-xs xl:text-sm">{followers}</span>
    </a>
  )
}

export default Icon;