import { ParentsReviewsPropsType } from "../types";

function ParentsReviews({ name, review, picture }: ParentsReviewsPropsType) {

  return (
    <div className="p-4 bg-myBlue/[0.13] flex items-center gap-4 rounded-md mx-5">
      <img src={picture} alt={name} className='!w-14 h-14 self-start rounded-full' />
      <div className='flex flex-col gap-2 '>
        <p className='text-justify text-dark/90 text-[13px]'>&ldquo;{review}&rdquo;</p>
        <span className='font-bold tet-lg self-end'> - {name}</span>
      </div>
    </div>
  )
}

export default ParentsReviews;