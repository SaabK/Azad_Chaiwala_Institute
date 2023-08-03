import { ModalContext } from '../Context/ModalContext';
import { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { institutionImages } from '../data/data';

function Modal() {

  const { setIsOpen } = useContext(ModalContext);

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className='fixed z-50 left-0 top-0 w-full h-full bg-black/40 overflow-scroll flex flex-col justify-center items-center'>
      <div className='p-5 bg-[#e4e4e4] w-min flex flex-col gap-2'>
        <button onClick={closeModal} className='btn !text-lg !text-white w-min'>❌</button>
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