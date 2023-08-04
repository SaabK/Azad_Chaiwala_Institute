import { ModalContext } from '../Context/ModalContext';
import { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { institutionImages } from '../data/data';
import { motion } from 'framer-motion';

function Modal() {

  const { setIsOpen } = useContext(ModalContext);

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className='fixed z-50 left-0 top-0 w-full h-full bg-black/60 overflow-hidden flex flex-col justify-center items-center'>
      <div className='p-3 px-5 bg-[#e4e4e4] rounded-lg w-min flex flex-col gap-2'>
        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} onClick={closeModal} className='btn !text-lg w-min'>❌</motion.button>
        <Carousel className='max-w-xs lg:max-w-lg'>
          {institutionImages.map((image, index) => (
            <img src={image} alt="Azad Chaiwala Institution" key={index} className='w-96 lg:w-40' />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Modal;