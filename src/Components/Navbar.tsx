import logo from '../assets/images/institute-logo-black.jpg';
import phoneIcon from '../assets/images/phone-icon.png';
import whatsappIcon from '../assets/images/whatsapp.png';
import MiniNavbar from './MiniNavbar';

import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

import { motion } from "framer-motion"

const animation = {
  whileHover: {
    rotate: [0, 360, 720, 1080, 1440],
    scale: [1, 1.03, 1.06, 1.09, 1.12, 1.15]
  },
  transition: { ease: 'easeOut' }
}

function Navbar() {

  return (
    <div className='bg-dark text-white'>
      <header className='container flex justify-between items-center py-1.5'>

        <div className='flex gap-3 !hidden'>
          <a className='flex flex-col items-center'>
            <motion.img
              {...animation}
              src={phoneIcon} alt="Call Us" className='relative h-8 rounded-full bg-yellow p-2 cursor-pointer overflow-hidden z-10' />
          </a>
          <a>
            <motion.img {...animation} src={whatsappIcon} alt="Call Us" className='h-8 rounded-full bg-yellow p-2 cursor-pointer' />
          </a>
        </div>

        <a href="/">
          <img src={logo} alt="Azad Chaiwala Institute" className='w-56 lg:h-14' />
        </a>
        <div>
          <div className='flex gap-2 text-sm'>
            <PrimaryButton text='Signup' className='' />
            <SecondaryButton text='Login' />
          </div>
          <div>

          </div>
        </div>
      </header>
      <header className='container'>
        <MiniNavbar />
      </header>
    </div>
  )
}

export default Navbar;