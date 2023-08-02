import { useContext } from 'react';
import { institutionImages } from '../data/data';
import { motion } from 'framer-motion';
import { ModalContext } from '../Context/ModalContext';

function ImageGallery() {

  const { setIsOpen } = useContext(ModalContext);

  const handleClick = () => {
    setIsOpen(true);
  }

  return (
    <div className="container bg-yellow/5 py-14 flex flex-col">
      <h1 className="text-center text-2xl font-bold border-b-4 border-yellow w-fit self-center px-2 pb-1">At Azad Chaiwala Institution</h1>
      <div className='bg-yellow/30 grid grid-cols-4 gap-3 p-3 my-8'>
        {institutionImages.map((image, index) => (
          <motion.img whileHover={{ scale: 1.1 }} src={image} alt="Azad Chaiwala Institution" key={index} className='w-96  cursor-pointer' onClick={handleClick} />
        ))}
      </div>
    </div>
  )
}

export default ImageGallery;