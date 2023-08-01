import affiliateProgramVertical from '../assets/images/affiliate-program-vertical.png';
import Platforms from './Platforms';

function Benefits() {
  return (
    <div className='container bg-black/5 py-16'>
      <section className="grid grid-cols-3">
        <div className='col-span-2 flex flex-col'>
          <Platforms />
        </div>
        <img src={affiliateProgramVertical} alt="Join our affiliate program" />
      </section>
    </div>
  )
}

export default Benefits;