import { CoursesCardPropsType } from '../types';
import PrimaryButton from './PrimaryButton';
import starIcon from '../assets/images/star.svg';
import { motion } from 'framer-motion';

function formatPrice(price: number) {
  return price.toLocaleString();
}

function CoursesCard({ popular, name, description, duration, pr_price, price, image, yellowImage, className }: CoursesCardPropsType) {
  return (
    <div className={`flex flex-col gap-2 bg-myBlue/60 rounded-lg relative card-shadow justify-between p-4 text-[14px] leading-5 xl:text-base xl:gap-3.5 col-span-3 courses lg:col-span-2 ${popular ? '!bg-yellow' : ''}  ${className}`}>
      <div className={`flex justify-between relative`}>
        <img src={popular ? yellowImage : image} alt="Graphics Design Course"
          className={`w-20 h-14 -mt-14 lg:w-24 lg:h-[4.25rem] lg:-mt-16 xl:w-28 xl:h-20 2xl:w-32 2xl:h-[5.5rem] 2xl:-mt-20`} />
        {popular && <motion.img
          animate={{
            top: ['-3rem', '-3.4rem', '-3.8rem', '-3.4rem', '-3.0rem'],
          }}
          transition={{ duration: 1, ease: 'backInOut', repeat: Infinity }}
          src={starIcon}
          alt="Popular Course"
          className='absolute w-8 right-[40%] xl:right-[46%]' />}
        <span className={`bg-yellow px-2 absolute -right-5 top-[-2.8rem] font-bold course-duration z-10`}>{duration}</span>
      </div>
      <h1 className={`font-bold text-xl line-clamp-2 leading-6 xl:text-3xl xl:line-clamp-1`}>{name}</h1>
      <p className={`text-black/80 text-justify line-clamp-3`}>{description}</p>
      <div className={`flex justify-between flex-col items-start gap-1.5 lg:flex-row lg:items-center under-courses`}>
        <p className={`flex gap-1.5 items-center justify-center  text-white rounded-md bg-black py-0.5 px-1.5 xl:gap-2`}>
          <span className={`line-through text-[12px] xl:text-[13px] ${popular ? '!text-yellow' : ''}`}>${formatPrice(pr_price)}</span>
          <span className={`font-bold text-sm xl:text-[16px] ${popular ? '!text-yellow' : ''}`}>${formatPrice(price)}</span>
        </p>
        <PrimaryButton text={`Learn More`} className={`btn-shadow ${popular ? '!bg-black !text-yellow !shadow-none' : ''}`} />
      </div>
    </div>
  )
}

export default CoursesCard;