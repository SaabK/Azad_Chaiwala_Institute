import { IconPropsType } from "../types";

function Icon({ icon, followers, href }: IconPropsType) {
  return (
    <a href={href} target="_blank" className="flex flex-col items-center">
      <img src={icon} alt="facebook" className="w-10 cursor-pointer" />
      <span className="font-bold ">{followers}</span>
    </a>
  )
}

export default Icon;