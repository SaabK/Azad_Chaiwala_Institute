import { ParentsReviewsPropsType } from "../types";

function ParentsReviews({ name, review, picture }: ParentsReviewsPropsType) {

  return (
    <div className="p-6 bg-myBlue/[0.13] flex gap-6 rounded-md">
      <img src={picture} alt={name} className='w-16 h-16 self-start rounded-full' />
      <div className='flex flex-col gap-2 '>
        <p className='text-justify text-dark/90 text-[15px]'>&ldquo;{review}&rdquo;</p>
        <span className='font-bold tet-lg self-end'> - {name}</span>
      </div>
    </div>
  )
}

export default ParentsReviews;