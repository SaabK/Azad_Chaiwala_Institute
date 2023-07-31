import ahsanYaqubImage from '../assets/images/people/ahsan-yaqub.webp';
import sabaTariqImage from '../assets/images/people/saba-tariq.webp';
import aishaSiddiqueImage from '../assets/images/people/aisha-siddiqa.webp';


import Testimonial from "./Testimonial";
import dots from '../assets/images/dots.png';

function Testimonials() {
  return (
    <div className="bg-myBlue/10 relative">
      <img src={dots} className="absolute w-32 opacity-10 top-12 left-12 -z-10" />
      <section className="container py-5 flex flex-col">
        <h1 className="text-5xl font-bold text-center my-8 border-b-4 border-myBlue w-fit self-center py-2 capitalize">What our student's say</h1>
        <div className="grid grid-cols-3 gap-20 my-8">
          <Testimonial title='I wasted my 4 years!' review="I feel I wasted 4 years of my life in University because this one month here taught me a lot, and I feel like I've learnt a skill for the first time in my life." name='Saba Tariq' location='Islamabad' picture={sabaTariqImage} />
          <Testimonial title='COLLEGE ISN’T MY THING' review="I didn't learn how to use computer in 10 years of schooling. I came to learn ‘how to use a computer’ so i could later go become a graphic designer." name='Ahsan Yaqub' location='Kotli AJK' picture={ahsanYaqubImage} />
          <Testimonial title='I WILL DO MORE COURSES!' review="I didn’t learn anything in my degree that I could use to make money that’s why I joined Azad Chaiwala Institute. Now I’m planning on doing more courses here" name='Aisha Siddique' location='Islamabad' picture={aishaSiddiqueImage} />
        </div>
        <img src={dots} className="absolute w-32 opacity-10 top-96 right-1 -z-10" />
      </section>
    </div>
  )
}

export default Testimonials;