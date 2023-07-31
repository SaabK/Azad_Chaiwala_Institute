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

function CoursesCard({ words = 140, popular, name, description, duration, pr_price, price, image, yellowImage }: CoursesCardPropsType) {

  return (
    <div className={`flex flex-col p-5 gap-2.5 bg-myBlue/60 rounded-lg relative card-shadow justify-between ${popular ? '!bg-yellow' : ''}`}>
      <div className={`flex justify-between relative`}>
        <img src={popular ? yellowImage : image} alt="Graphics Design Course"
          className={`w-32 -mt-20`} />
        {popular && <motion.img
          animate={{
            top: ['-3rem', '-3.4rem', '-3.8rem', '-3.4rem', '-3.0rem'],
          }}
          transition={{ duration: 1, ease: 'backInOut', repeat: Infinity }}
          src={starIcon}
          alt="Popular Course"
          className='absolute w-14 right-[40%] -top-14 star-shadow' />}
        <span className={`bg-yellow px-2 absolute -right-5 top-[-3.2rem] font-bold course-duration`}>{duration}</span>
      </div>
      <h1 className={`text-3xl font-bold`}>{name}</h1>
      <p className={`text-black/80`}>{truncate(description, words)}</p>
      <div className={`flex justify-between items-center`}>
        <p className={`flex gap-2.5 items-end  text-white rounded-md bg-black py-1 px-2`}>
          <span className={`line-through text-xl ${popular ? '!text-yellow' : ''}`}>${formatPrice(pr_price)}</span>
          <span className={`font-bold text-2xl ${popular ? '!text-yellow' : ''}`}>${formatPrice(price)}</span>
        </p>
        <PrimaryButton text={`Learn More`} className={`btn-shadow ${popular ? '!bg-black !text-yellow !shadow-none' : ''}`} />
      </div>
    </div>
  )
}

export default CoursesCard;