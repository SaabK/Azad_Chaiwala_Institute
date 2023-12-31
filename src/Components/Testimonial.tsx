import { TestimonialPropsType } from '../types';

function Testimonial({ title, review, name, location, picture }: TestimonialPropsType) {
  return (
    <div className='relative bg-myBlue/20 p-7 rounded-lg flex flex-col gap-2 z-20 justify-between md:max-w-md lg:max-w-[22rem]'>
      <h1 className='text-center text-2xl font-bold uppercase my-2 lg:text-xl'>{title}</h1>
      <p className='text-center text-black/90 mb-5 lg:text-[15px]'>"{review}"</p>
      <div className='flex flex-col mt-4 bg-myBlue/80 -m-7 rounded-b-lg p-3'>
        <img src={picture} alt={`${name} from ${location}`} className='rounded-full w-16 self-center -mt-12 lg:w-14' />
        <span className='font-bold self-center text-lg my-2 rounded-md lg:text-base'> - {name}, <span className=''>{location}</span> </span>
      </div>
    </div>
  )
}

export default Testimonial;