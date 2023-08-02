import { CoursesCardPropsType } from '../types';
import PrimaryButton from './PrimaryButton';
import starIcon from '../assets/images/star.svg';
import { motion } from 'framer-motion';

function truncate(str: string, n: number): string {
  return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
}

function formatPrice(price: number) {
  return price.toLocaleString();
}

function CoursesCard({ words = 99, popular, name, description, duration, pr_price, price, image, yellowImage, className, big }: CoursesCardPropsType) {

  return (
    <div className={`flex flex-col gap-2 bg-myBlue/60 rounded-lg relative card-shadow justify-between p-4 text-[14px] leading-5  ${popular ? '!bg-yellow' : ''} ${className}`}>
      <div className={`flex justify-between relative`}>
        <img src={popular ? yellowImage : image} alt="Graphics Design Course"
          className={`w-20 h-14 -mt-14`} />
        {popular && <motion.img
          animate={{
            top: ['-3rem', '-3.4rem', '-3.8rem', '-3.4rem', '-3.0rem'],
          }}
          transition={{ duration: 1, ease: 'backInOut', repeat: Infinity }}
          src={starIcon}
          alt="Popular Course"
          className='absolute w-8 right-[40%] ' />}
        <span className={`bg-yellow px-2 absolute -right-5 top-[-2.8rem] font-bold course-duration z-10`}>{duration}</span>
      </div>
      <h1 className={`font-bold text-xl line-clamp-2 leading-6`}>{name}</h1>
      <p className={`text-black/80 text-justify`}>{truncate(description, words)}</p>
      <div className={`flex justify-between flex-col items-start gap-1.5 ${big ? '!flex-row !items-center' : null}`}>
        <p className={`flex !gap-1.5 items-center  text-white rounded-md bg-black py-0.5 px-1.5`}>
          <span className={`line-through text-xl !text-[12px] ${popular ? '!text-yellow' : ''}`}>${formatPrice(pr_price)}</span>
          <span className={`font-bold text-sm ${popular ? '!text-yellow' : ''}`}>${formatPrice(price)}</span>
        </p>
        <PrimaryButton text={`Learn More`} className={`btn-shadow ${popular ? '!bg-black !text-yellow !shadow-none' : ''}`} />
      </div>
    </div>
  )
}

export default CoursesCard;