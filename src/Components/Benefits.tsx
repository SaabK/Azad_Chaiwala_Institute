import affiliateProgramVertical from '../assets/images/affiliate-program-vertical.png';
import Comparison from './Comparison';
import Platforms from './Platforms';
import { LazyLoadImage } from "react-lazy-load-image-component";

function Benefits() {
  return (
    <div className='container bg-myBlue/10 py-8'>
      <section className="grid grid-cols-3 gap-7">
        <div className='col-span-3 flex flex-col gap-7 xl:col-span-2'>
          <Platforms />
          <Comparison />
        </div>
        <LazyLoadImage src={affiliateProgramVertical} alt="Join our affiliate program" className='hidden xl:block self-stretch' />
      </section>
    </div>
  )
}

export default Benefits;