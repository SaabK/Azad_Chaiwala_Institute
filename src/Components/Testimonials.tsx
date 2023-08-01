import Testimonial from "./Testimonial";
import dots from '../assets/images/dots.png';
import ParentsReviews from './ParentsReviews';
import GoogleReviews from './GoogleReviews';
import { parentsReviewsData, testimonialsData } from '../data/data';

function Testimonials() {

  return (
    <div className="bg-myBlue/10 relative mt-10">
      <img src={dots} className="absolute w-32 opacity-10 top-12 left-12 -z-10" />
      <section className="container py-5 flex flex-col">
        <h1 className="text-5xl font-bold text-center my-8 border-b-4 border-myBlue w-fit self-center py-2 capitalize">What our student's say</h1>
        <div className="grid grid-cols-3 gap-20 my-8">
          {testimonialsData.map((testimonial, index) => (
            <Testimonial title={testimonial.name} review={testimonial.review} picture={testimonial.picture} name={testimonial.name} location={testimonial.location} key={index} />
          ))}
        </div>
        <div className='flex justify-between py-5'>
          <div className='flex flex-col w-full'>
            <h1 className='text-4xl font-bold self-center my-4 border-b-4 border-myBlue mb-10' >Parents Reviews</h1>
            <div className='pr-6 flex flex-col gap-5 h-[817px] overflow-scroll overflow-x-hidden scroll-bar'>
              {parentsReviewsData.map((review, index) => (
                <ParentsReviews name={review.name} review={review.review} picture={review.picture} key={index} />
              ))}
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <h1 className='text-4xl font-bold self-center my-4 border-b-4 border-myBlue mb-10'>Reviews From Google</h1>
            <div className='pl-6 h-[800px]'>
              <GoogleReviews />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials;