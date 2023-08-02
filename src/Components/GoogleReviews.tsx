import { googleReviewsData } from '../data/data';

function GoogleReviews() {
  return (
    <div className='grid grid-cols-2 gap-3.5'>
      {googleReviewsData.map((review, index) => (
        <Card key={index} name={review.name} review={review.review} picture={review.picture} />
      ))}
    </div>
  )
}

export default GoogleReviews;


import star from '../assets/images/star.svg';
import googleIcon from '../assets/images/google.webp';
import { CardPropsType } from '../types';

function Card({ name, review, picture }: CardPropsType) {

  return (
    <div className='bg-yellow/[0.11]  p-4 rounded-lg flex flex-col gap-3 justify-between'>
      <div className='flex gap-1 items-center'>
        <img src={picture} alt={name} className='w-9' />
        <div>
          <span className='text-[14px]'>{name}</span>
          <div className='flex gap-1'>
            <img src={star} className='w-4' />
            <img src={star} className='w-4' />
            <img src={star} className='w-4' />
            <img src={star} className='w-4' />
            <img src={star} className='w-4' />
          </div>
        </div>
      </div>
      <p className='text-[15px] justify'>{review}</p>
      <img src={googleIcon} className='w-16 self-end' alt="Google Review" />
    </div>
  )
}
