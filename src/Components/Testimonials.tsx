import Testimonial from "./Testimonial";
import dots from '../assets/images/dots.png';
import ParentsReviews from './ParentsReviews';
import GoogleReviews from './GoogleReviews';
import { parentsReviewsData, testimonialsData } from '../data/data';
import { Carousel } from 'react-responsive-carousel';

function Testimonials() {

  return (
    <div className="bg-myBlue/10 relative mt-10">
      <img src={dots} className="absolute w-32 opacity-10 top-12 left-12 hidden" />
      <section className="container py-5 flex flex-col">
        <h1 className="text-3xl font-bold text-center my-3 border-b-4 border-myBlue w-fit self-center py-1 capitalize">What our student's say</h1>
        <div className="grid grid-cols-1 gap-8 my-5">
          {testimonialsData.map((testimonial, index) => (
            <Testimonial title={testimonial.title} review={testimonial.review} picture={testimonial.picture} name={testimonial.name} location={testimonial.location} key={index} />
          ))}
        </div>
        <div className='flex flex-col justify-between py-5'>
          <div className='flex flex-col w-full'>
            <h1 className='text-4xl font-bold self-center my-4 border-b-4 border-myBlue mb-10' >Parents Reviews</h1>
            <div className=''>
              <Carousel swipeable={true} autoPlay={true}>
                {parentsReviewsData.map((review, index) => (
                  <ParentsReviews name={review.name} review={review.review} picture={review.picture} key={index} />
                ))}
              </Carousel>
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <h1 className='text-4xl font-bold self-center my-4 border-b-4 border-myBlue mb-10'>Reviews From Google</h1>
            <div className=' '>
              <GoogleReviews />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials;