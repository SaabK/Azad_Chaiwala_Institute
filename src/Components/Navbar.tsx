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

        <div className='flex gap-1 md:gap-3'>
          <a className='relative flex flex-col items-center group' target='_blank' href='tel:+92 304 1111361' >
            <motion.img
              {...animation}
              src={phoneIcon} alt="Call Us" className='relative h-6 rounded-full bg-yellow p-1.5 cursor-pointer overflow-hidden z-10 md:h-8 md:p-2' />
            <span className={`bg-[#2a2a2a] px-2 py-1 absolute font-bold text-sm -bottom-12 z-10 w-max text-white details hidden md:group-hover:flex`}>+92 304 1111361</span>
          </a>
          <a className='relative flex flex-col items-center group' href='https://wa.me/+923005558529?text=I%20want%20to%20know%20about%20courses%20you%20provide' target='_blank' aria-label="Chat on WhatsApp">
            <motion.img {...animation} src={whatsappIcon} alt="Call Us" className=' relative h-6 rounded-full bg-yellow p-1.5 cursor-pointer overflow-hidden z-10 md:h-8 md:p-2' />
          </a>
        </div>

        <a href="/">
          <img src={logo} alt="Azad Chaiwala Institute" className='w-44 lg:w-80' />
        </a>
        <div>
          <div className='flex gap-2 text-sm lg:gap-3 xl:gap-4'>
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