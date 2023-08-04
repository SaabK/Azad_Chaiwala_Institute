import affiliateProgramVertical from '../assets/images/affiliate-program-vertical.png';
import Comparison from './Comparison';
import Platforms from './Platforms';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from 'framer-motion';

function Benefits() {
  return (
    <motion.div initial={{ top: '200px' }}
      whileInView={{ top: '0' }}
      viewport={{ once: true }} className='container bg-myBlue/10 py-8'>
      <section className="grid grid-cols-3 gap-7">
        <div className='col-span-3 flex flex-col gap-7 xl:col-span-2'>
          <Platforms />
          <Comparison />
        </div>
        <LazyLoadImage src={affiliateProgramVertical} alt="Join our affiliate program" className='hidden xl:block self-stretch' />
      </section>
    </motion.div>
  )
}

export default Benefits;