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
    <div className='fixed z-50 left-0 top-0 w-full h-full bg-black/40'>
      <button onClick={closeModal} className='btn bg-white mx-2 my-2'>X</button>
      <div className='p-5 bg-white'>
        <Carousel>
          {institutionImages.map((image, index) => (
            <img src={image} alt="Azad Chaiwala Institution" key={index} className='w-96' />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Modal;