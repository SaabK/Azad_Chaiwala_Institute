import affiliateProgram from '../assets/images/affiliate-program.png';
import { coursesData } from '../data/data';

import CoursesCard from "./CoursesCard";

function Courses() {

  return (
    <div className="bg-white">
      <img src={affiliateProgram} alt="Join our affiliate program" className='cursor-pointer mb-10' />
      <section className="container py-5 flex flex-col gap-20">
        <div className="grid grid-cols-6 gap-4 gap-y-16">
          {
            coursesData.map((data, index) => (
              <CoursesCard name={data.name} description={data.description} image={data.image} yellowImage={data.yellowImage} duration={data.duration} price={data.price} pr_price={data.pr_price} words={data.words} popular={data.popular} key={index} />
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Courses;